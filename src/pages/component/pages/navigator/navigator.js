import './navigator.scss'

import { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageSwitch extends Component {
  constructor () {
    super(...arguments)
  }

  state = {}

  render () {
    return (
      <View className='container'>
        <Header title='Navigator'></Header>
        <View className='page-body'>
          <View className='page-section'>
            <navigator
              url='/pages/component/pages/navigatePage/navigatePage'
              className='navigator'>
              <View className='navigator-text'>跳转到新页面</View>
            </navigator>
            <navigator
              url='/pages/component/pages/redirectPage/redirectPage'
              className='navigator'
              open-type='redirect'>
              <View className='navigator-text'>在当前页打开</View>
            </navigator>
          </View>
        </View>
      </View>
    )
  }
}
