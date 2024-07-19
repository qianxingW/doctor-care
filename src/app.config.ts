export default {
  pages: [
    'pages/index/index',
    'pages/PatientEscort/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666',
    selectedColor: '#007AFF',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        // iconPath: 'static/images/tabbar/home.png',
        // selectedIconPath: 'static/images/tabbar/home_active.png'
      },
      {
        pagePath: 'pages/PatientEscort/index',
        text: '陪诊师',
        // iconPath: 'static/images/tabbar/user.png',
        // selectedIconPath: 'static/images/tabbar/user_active.png'
      }
    ]
  }
}
