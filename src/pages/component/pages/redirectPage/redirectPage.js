import { Component } from '@tarojs/taro'
import { View, Text, Switch } from '@tarojs/components'

export default class PageSwitch extends Component {
  config = {
    navigationBarTitleText: 'redirectPage'
  }

  constructor () {
    super(...arguments)
  }

  render () {
    return (
      <View className='container' ></View>
    )
  }
}
