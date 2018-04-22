import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Head from '../../../../components/head/head'
import Foot from '../../../../components/foot/foot'
import './view.scss'
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
            <ScrollView
              scroll-y
              scroll-with-animation
              scroll-top='0'
              style='height: 200px;'
              lower-threshold='20'
              upperThreshold='20'
              bindscrolltoupper={this.handleBindscrolltoupper}
              onScroll={this.handleScroll}
            >
              <View style='height:100px;background-color:#FF6164;' />
              <View style='height:100px;background-color:#FFBE34;' />
              <View style='height:100px;background-color:#00BB2B;' />
            </ScrollView>
          </View>
          <View className="page-section">
            <View className="page-section-title">
              <Text> Horizontal \n横向滚动</Text>
            </View>
            <ScrollView
              scroll-x
              scroll-left='30'
              style='white-space: nowrap;'
              bindscrolltolower={this.handleBindscrolltolower}
            >
              <View style='height:100px;background-color:#FF6164;display:inline-block;width:200px;' />
              <View style='height:100px;background-color:#FFBE34;display:inline-block;width: 200px;' />
              <View style='height:100px;background-color:#00BB2B;display:inline-block;width: 200px;' />
            </ScrollView>
          </View>
        </View>
        <Foot />
      </View>
    )
  }
}
