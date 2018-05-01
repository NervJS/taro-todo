import Taro, { Component } from '@tarojs/taro'
import { View, Text, Switch } from '@tarojs/components'
import Head from '../../../../components/head/head'
import Foot from '../../../../components/foot/foot'
export default class PageSwitch extends Component {
  config = {
    navigationBarTitleText: 'redirectPage'
  }

  constructor () {
    super(...arguments)
  }

  render () {
    return (
      <View className="container">
        <Head title="当前页"/>
        <Foot/>
      </View>
    )
  }
}
