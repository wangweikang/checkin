import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'

import 'taro-ui/dist/style/index.scss'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/activit/index',
      'pages/about/index',
    ],
    // <View className='tabbar'>
    //       <AtTabBar
    //         fixed
    //         tabList={[
    //           { title: '首页', iconType: 'home', text: 'new' },
    //           { title: '活动', iconType: 'bell', dot: true },
    //           { title: '关于', iconType: 'heart' }
    //         ]}
    //         onClick={this.handleClick.bind(this)}
    //         current={this.state.current}
    //       />
    //     </View>
    tabBar: {
      list: [
        {
          'iconPath': 'resource/home.png',
          'selectedIconPath': 'resource/home_on.png',
          pagePath: 'pages/index/index',
          text: '首页'
        },
        {
          'iconPath': 'resource/activit.png',
          'selectedIconPath': 'resource/activit_on.png',
          pagePath: 'pages/activit/index',
          text: '活动'
        },
        {
          'iconPath': 'resource/about.png',
          'selectedIconPath': 'resource/about_on.png',
          pagePath: 'pages/about/index',
          text: '关于'
        },
      ]
    }
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '签到',
      navigationBarTextStyle: 'black'
    },
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
