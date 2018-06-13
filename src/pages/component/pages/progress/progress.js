import './progress.scss'

import { Component } from '@tarojs/taro'
import { View, Progress } from '@tarojs/components'

export default class PageView extends Component {
  config = {
    navigationBarTitleText: 'Progress'
  }
  constructor () {
    super(...arguments)
  }
  render () {
    return (
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-spacing' style='margin-bottom:104px;'>
              <Progress percent={20} showInfo strokeWidth={2} ></Progress>
            </View>
            <View className='page-section-spacing'>
              <Progress percent={40} strokeWidth={2} active ></Progress>
            </View>
            <View className='page-section-spacing'>
              <Progress percent={60} strokeWidth={2} active ></Progress>
            </View>
            <View className='page-section-spacing'>
              <Progress
                percent={80}
                strokeWidth={2}
                active
                activeColor='blue' />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
