let databasePromise = require('./databaseDriver');
let socketServerPromise = require('./socketServerDriver');

const shortid = require('shortid');

databasePromise.then(db => {
  socketServerPromise.then(server => {
    // 一个用于缓存连接 ID 到验证 ID 的映射
    // key 为 client ID，value 为 session
    let sessionMap = {};

    // 工具函数，写入日志用
    const log = (op, action, state = true, reason = '', data = '') => (new db.Log({
      operator: op,
      action,
      state,
      reason,
      data,
      time: new Date()
    })).save(err => {
      if (err) console.error(err);
      else console.log(op ? op.toString().substr(19) : '', '-', action, ':', state ? 'Success,' : 'Fail,', reason, data);
    });

    /**
     * @description 用于验证链接的身份
     * @param   key:string        使用的连接凭据密钥
     * @return  pass:bool         是否通过验证
     * 
     * @todo  这是个很简陋的身份验证器，未来改进的时候可以将其改为互换公钥式的加密交换，保证严格安全登录
     */
    server.register('account.verify', (obj, callback, clients) => {
      db.User.findOne({ session: obj.key }).exec((err, user) => {
        if (err || user === null) {
          log(null, 'account.verify', false, 'error.account.noSession');
          callback({ pass: false });
        }
        else {
          console.log(user);
          sessionMap[obj.id] = user.session;
          log(user._id, 'account.verify');
          callback({ pass: true });
        }
      });
    });

    /**
     * @description 用于登录、获取链接凭据密钥
     * @param   name:string     用户名
     * @param   password:string 密码加密后的文本
     * @return  pass:bool       是否通过验证
     * @return  session:?string 如果通过验证，将会提供此字段，为连接凭据密钥
     * @return  reason:?string  如果未通过验证，将会提供此字段，提供失败原因
     */
    server.register('account.login', (obj, callback, clients) => {
      db.User.findOne({ name: obj.name }).exec((err, user) => {
        if (err || user === null) {
          log(null, 'account.login', false, 'error.account.noUser');
          callback({ pass: false, reason: 'error.account.noUser' });
        }
        else {
          if (user.password !== obj.password) {
            log(user._id, 'account.login', false, 'error.account.wrongPassword');
            callback({ pass: false, reason: 'error.account.wrongPassword' });
          } else {
            let session = shortid.generate();
            user.session = session;
            user.save(err => {
              if (err) {
                log(user._id, 'account.login', false, 'error.account.writeFailed');
                callback({ pass: false, reason: 'error.account.writeFailed' });
              } else {
                log(user._id, 'account.login');
                callback({ pass: true, session });
                sessionMap[obj.id] = session;
              }
            });
          }
        }
      });
    });

    /**
     * @description 用于注册账户
     * @param   name:string     用户名
     * @param   password:string 密码加密后的文本
     * @return  state:bool      是否成功
     * @return  reason:string   如果未成功，将会提供此字段，提供失败原因
     */
    server.register('account.register', (obj, callback, clients) => {
      db.User.findOne({ name: obj.name }, (err, doc) => {
        if (err || doc !== null) {
          log(null, 'account.register', false, 'error.account.repeatRegistration');
          callback({ state: false, reason: 'error.account.repeatRegistration' });
        } else {
          let user = new db.User({
            name: obj.name,
            password: obj.password
          });
          user.save((err, user) => {
            if (err) {
              log(null, 'account.register', false, 'error.account.writeFailed');
              callback({ state: false, reason: 'error.account.writeFailed' });
            } else {
              log(user._id, 'account.register');
              callback({ state: true });
            }
          });
        }
      })
    });

    console.log('Command Initialized.');
  });
});