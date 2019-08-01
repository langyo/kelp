export default {
  views: {
    drawer: {
      show: '',
      open: false
    },
    dialog: {
      show: ''
    },
    fab: {
      show: ''
    },
    theme: {
      native: false,
      device: 'desktop',
      color: {
        primary: '#39c',
        secondary: '#33c'
      },
      language: 'zh-chs'
    },
    popupMenu: {
      show: ''
    },
    popupMessage: {
      messages: []
    },
    server: {
      network: 'connecting',
      database: 'loading'
    }
  },
  database: {
    accounts: {},
    classes: {},
    broadcast: {
      broadcasts: [
        {
          title: 'TEST',
          date: '未知日期',
          description: '123\n233\n333'
        }
      ]
    }
  },
  pages: {
    picker: {
      nowSelectingLuckyGuy: '点击开始',
      nowSelectingGroup: '',
      nowSelectingGroupType: '',
      nowSelectingClass: '',
      working: false,
      score: 0
    }
  }
};