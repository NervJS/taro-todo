import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Head from '../../../../components/head/head'
import Foot from '../../../../components/foot/foot'
import './scroll-view.scss'
export default class PageView extends Component {
  config = {
    navigationBarTitleText: 'Scroll-view'
  }
  constructor() {
    super(...arguments)
  }
  render() {
    return (
      <View className="container">
        <Head title="scroll-view" />
        <View className="page-body">
          <View className="page-section">
            <View className="page-section-title">
              <Text>Vertical Scroll\n纵向滚动</Text>
            </View>
            <ScrollView class='scrollview'
              scroll-y
              scroll-with-animation
              scroll-top='0'
              style='height: 150px;'
              lower-threshold='20'
              upperThreshold='20'
              bindscrolltoupper={this.handleBindscrolltoupper}
              onScroll={this.handleScroll}
            >
              <View style='height:150px;background-color:rgb(26,173,25);'>A</View>
              <View style='height:150px;background-color:rgb(39,130,215);'>B</View>
              <View style='height:150px;background-color:rgb(241,241,241);color: #333;'>C</View>
            </ScrollView>
          </View>
          <View className="page-section">
            <View className="page-section-title">
              <Text> Horizontal \n横向滚动</Text>
            </View>
            <ScrollView class='scrollview'
              scroll-x
              scroll-left='0'
              style='white-space: nowrap;'
              bindscrolltolower={this.handleBindscrolltolower}
            >
              <View style='height:150px;background-color:rgb(26,173,25);display:inline-block;width: 300px;'>A</View>
              <View style='height:150px;background-color:rgb(39,130,215);display:inline-block;width: 300px;'>B</View>
              <View style='height:150px;background-color:rgb(241,241,241);display:inline-block;width: 300px;color: #333;'>C</View>
            </ScrollView>
          </View>
        </View>
        <Foot />
      </View>
    )
  }
}
