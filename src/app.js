import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'

import { createStore } from 'redux'

import Index from './pages/index/index'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/component/pages/view/view',
      'pages/component/index',

      'pages/index/index',
      'pages/hello/hello',
      'pages/about/about'
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

  render() {
    return <Index />
  }
}
