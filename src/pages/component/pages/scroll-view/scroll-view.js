import './scroll-view.scss'

import { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageView extends Component {
  constructor () {
    super(...arguments)
  }
  
  render () {
    return (
      <View className='container'>
        <Header title='ScrollView'></Header>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>Vertical Scroll 纵向滚动</Text>
            </View>
            <ScrollView
              className='scrollview'
              scroll-y
              scroll-with-animation
              scroll-top='0'
              style='height: 150px;'
              lower-threshold='20'
              upperThreshold='20'
              bindscrolltoupper={this.handleBindscrolltoupper}
              onScroll={this.handleScroll}>
              <View style='height:150px;background-color:rgb(26,173,25);'>
                A
              </View>
              <View style='height:150px;background-color:rgb(39,130,215);'>
                B
              </View>
              <View style='height:150px;background-color:rgb(241,241,241);color: #333;'>
                C
              </View>
            </ScrollView>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text> Horizontal 横向滚动</Text>
            </View>
            <ScrollView
              className='scrollview'
              scroll-x
              scroll-left='0'
              style='white-space: nowrap;'
              bindscrolltolower={this.handleBindscrolltolower}>
              <View style='height:150px;background-color:rgb(26,173,25);display:inline-block;width: 300px;'>
                A
              </View>
              <View style='height:150px;background-color:rgb(39,130,215);display:inline-block;width: 300px;'>
                B
              </View>
              <View style='height:150px;background-color:rgb(241,241,241);display:inline-block;width: 300px;color: #333;'>
                C
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}
