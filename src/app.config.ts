export default {
  pages: [
    'pages/index/index',
    'pages/patientEscort/index',
    'pages/makeAppointment/index',
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
        iconPath: 'assets/images/home.png',
        selectedIconPath: 'assets/images/home_active.png'
      },
      {
        pagePath: 'pages/patientEscort/index',
        text: '陪诊师',
        iconPath: 'assets/images/patient_escort.png',
        selectedIconPath: 'assets/images/patient_escort_active.png'
      },
      {
        pagePath: 'pages/makeAppointment/index',
        text: '预约',
        iconPath: 'assets/images/make_appointment.png',
        selectedIconPath: 'assets/images/make_appointment_active.png'
      }
    ]
  }
}
