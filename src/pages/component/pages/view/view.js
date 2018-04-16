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
      <View class="container">
        <Head title="view" />
        <View class="page-body">
          <View class="page-section">
            <View class="page-section-title">
              <Text>flex-direction: row\n横向布局</Text>
            </View>
            <View class="page-section-spacing">
              <View class="flex-wrp" style="flex-direction:row;">
                <View class="flex-item demo-text-1" />
                <View class="flex-item demo-text-2" />
                <View class="flex-item demo-text-3" />
              </View>
            </View>
          </View>
          <View class="page-section">
            <View class="page-section-title">
              <Text>flex-direction: column\n纵向布局</Text>
            </View>
            <View class="flex-wrp" style="flex-direction:column;">
              <View class="flex-item flex-item-V demo-text-1" />
              <View class="flex-item flex-item-V demo-text-2" />
              <View class="flex-item flex-item-V demo-text-3" />
            </View>
          </View>
        </View>
        <Foot />
      </View>
    )
  }
}
