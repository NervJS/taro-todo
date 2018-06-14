import './view.scss'

import { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageView extends Component {
  constructor () {
    super(...arguments)
  }

  render () {
    return (
      <View className='container'>
        <Header title='View'></Header>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>flex-direction: row 横向布局</Text>
            </View>
            <View className='page-section-spacing'>
              <View className='flex-wrp' style='flex-direction:row;'>
                <View className='flex-item demo-text-1' ></View>
                <View className='flex-item demo-text-2' ></View>
                <View className='flex-item demo-text-3' ></View>
              </View>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>flex-direction: column 纵向布局</Text>
            </View>
            <View className='flex-wrp' style='flex-direction:column;'>
              <View className='flex-item flex-item-V demo-text-1' ></View>
              <View className='flex-item flex-item-V demo-text-2' ></View>
              <View className='flex-item flex-item-V demo-text-3' ></View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
