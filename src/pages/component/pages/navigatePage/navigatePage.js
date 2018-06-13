import { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class PageSwitch extends Component {
  config = {
    navigationBarTitleText: 'navigatePage'
  }

  constructor () {
    super(...arguments)
  }

  state = {}

  render () {
    return <View className='container' ></View>
  }
}
