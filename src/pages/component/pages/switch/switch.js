import './switch.scss'

import { Component } from '@tarojs/taro'
import { View, Text, Switch } from '@tarojs/components'

export default class PageSwitch extends Component {
  config = {
    navigationBarTitleText: 'Switch'
  }
  constructor () {
    super(...arguments)
  }

  state = {}
  render () {
    return (
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>默认样式</Text>
            </View>
            <View className='page-section-spacing-reset'>
              <Switch checked ></Switch>
              <Switch ></Switch>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>推荐展示样式</Text>
            </View>
            <View className='switch-list'>
              <View className='switch-list__item'>
                <View className='switch-list__text'>开启中</View>
                <Switch checked ></Switch>
              </View>
              <View className='switch-list__item'>
                <View className='switch-list__text'>关闭</View>
                <Switch ></Switch>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
