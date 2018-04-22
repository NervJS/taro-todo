import Taro, { Component } from '@tarojs/taro'
import { setStore } from '@tarojs/redux'
import '@tarojs/async-await'

import Index from './pages/index/index'

import configStore from './store'

import './app.scss'

const store = configStore()
setStore(store)

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

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}
