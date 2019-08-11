const mongoose = require('mongoose');

let db = mongoose.createConnection('mongodb://localhost/test');

db.on('error', e => (console.error(e), process.exit()));

const createModel = (name, obj) => db.model(name, mongoose.Schema(obj));

const createModels = obj => {
  let ret = {};
  for(let name of Object.keys(obj)) {
    ret[name] = createModel(name, obj[name]);
  }
  return ret;
}

const ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = new Promise(resolve => {
  db.once('open', () => {
    console.log('Database has been connected.');

    resolve(createModels({
      Broadcast: {
        date: Date,
        message: String,
        permission: [{
          type: ObjectId,
          ref: 'UserGroup'
        }]
      },
      User: {
        name: String,
        password: {
          type: String,
          default: ''
        },
        userGroup: {
          type: ObjectId,
          ref: 'UserGroup'
        },
        expression: [{
          type: ObjectId,
          ref: 'Expression'
        }],
        scoreData: [{
          type: ObjectId,
          ref: 'Score'
        }],
        log: [{
          type: ObjectId,
          ref: 'Log'
        }]
      },
      Class: {
        name: String,
        students: [{
          type: ObjectId,
          ref: 'User'
        }],
        teachers: [{
          type: ObjectId,
          ref: 'User'
        }],
        groups: [{
          type: ObjectId,
          ref: 'ClassGroupType'
        }],
        state: {
          type: String,
          enum: ['begin', 'over', 'continue']
        },
        nowUsingTeacher: {
          type: ObjectId,
          ref: 'User'
        }
      },
      Log: {
        operator: {
          type: ObjectId,
          ref: 'User'
        },
        description: String
      },
      UserGroup: {
        name: String,
        expression: {
          type: ObjectId,
          ref: 'Expression'
        },
        users: [{
          type: ObjectId,
          ref: 'User'
        }]
      },
      Expression: {
        kind: {
          type: String,
          enum: ['read', 'write', 'modify', 'manage']
        },
        target: {
          type: ObjectId
        },
        targetType: {
          type: String,
          enum: ['userGroup', 'class', 'group']
        }
      },
      ClassGroupType: {
        name: String,
        groups: [{
          type: ObjectId,
          ref: 'ClassGroup'
        }],
        managers: [{
          type: ObjectId,
          ref: 'User'
        }]
      },
      ClassGroup: {
        name: String,
        members: [{
          type: ObjectId,
          ref: 'User'
        }],
        managers: [{
          type: ObjectId,
          ref: 'User'
        }]
      },
      Score: {
        kind: {
          type: ObjectId,
          ref: 'ScoreType' 
        },
        score: Number,
        log: [{
          type: ObjectId,
          ref: 'Log'
        }]
      },
      ScoreType: {
        name: String,
        tradeRules: [{
          type: ObjectId,
          ref: 'TradeRule'
        }]
      },
      TradeRule: {
        from: {
          type: ObjectId,
          ref: 'ScoreType'
        },
        to: {
          type: ObjectId,
          ref: 'ScoreType'
        },
        weightFrom: Number,
        weightTo: Number,
        decimalPartRule: {
          type: String,
          enum: ['toZero', 'toOne', 'nearly', 'none']
        }
      }
    }));

    console.log('Database has been initialized.');
  });
});