import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index/index'
import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/component/index',
      'pages/component/pages/view/view',
      'pages/component/pages/scroll-view/scroll-view',
      'pages/component/pages/icon/icon',
      'pages/component/pages/progress/progress',
      'pages/component/pages/image/image',
      'pages/component/pages/audio/audio',
      'pages/component/pages/video/video',
      'pages/component/pages/swiper/swiper',
      'pages/component/pages/form/form',
      'pages/component/pages/input/input',
      'pages/component/pages/checkbox/checkbox',
      'pages/component/pages/radio/radio',
      'pages/component/pages/button/button',
      'pages/component/pages/text/text',
      'pages/component/pages/label/label',
      'pages/component/pages/picker/picker',
      'pages/component/pages/slider/slider',
      'pages/component/pages/switch/switch',
      'pages/component/pages/textarea/textarea',
      'pages/component/pages/canvas/canvas',
      'pages/component/pages/map/map',
      'pages/component/pages/navigator/navigator',
      'pages/component/pages/redirectPage/redirectPage',
      'pages/component/pages/navigatePage/navigatePage',
      // 'pages/index/index',
      // 'pages/hello/hello',
      // 'pages/about/about'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'TODO List',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
