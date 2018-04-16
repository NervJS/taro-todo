import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Head from '../../../../components/head/head'
import Foot from '../../../../components/foot/foot'
import './view.scss'
export default class PageView extends Component {
  config = {
    navigationBarTitleText: 'View'
  }
  constructor() {
    super(...arguments)
  }
  render() {
    return (
      <View className="container">
        <Head title="view" />
        <View className="page-body">
          <View className="page-section">
            <View className="page-section-title">
              <Text>flex-direction: row\n横向布局</Text>
            </View>
            <View className="page-section-spacing">
              <View className="flex-wrp" style="flex-direction:row;">
                <View className="flex-item demo-text-1" />
                <View className="flex-item demo-text-2" />
                <View className="flex-item demo-text-3" />
              </View>
            </View>
          </View>
          <View className="page-section">
            <View className="page-section-title">
              <Text>flex-direction: column\n纵向布局</Text>
            </View>
            <View className="flex-wrp" style="flex-direction:column;">
              <View className="flex-item flex-item-V demo-text-1" />
              <View className="flex-item flex-item-V demo-text-2" />
              <View className="flex-item flex-item-V demo-text-3" />
            </View>
          </View>
        </View>
        <Foot />
      </View>
    )
  }
}
