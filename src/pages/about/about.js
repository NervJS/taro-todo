import './about.scss'

import { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
export default class About extends Component {
  config = {
    navigationBarTitleText: 'about'
  }

  constructor () {
    super(...arguments)
  }

  componentDidMount () {
    console.log('about mount')
  }

  componentDidShow () {
    console.log('about show')
  }

  componentDidHide () {
    console.log('about hide')
  }

  componentWillUnmount () {
    console.log('about unmount')
  }

  render () {
    return (
      <View className='about'>
        <View>
          <Text>关于</Text>
          <View className='info'>
            <Text>Nerv-WEUI 基础组件是基于 WEUI 和 微信小程序 开发的组件库,目的是为了提供一套多端可使用的基础组件库,其样式与 WEUI 对齐,组件的调用方式跟 微信小程序 统一</Text>
          </View>
        </View>
      </View>
    )
  }
}
