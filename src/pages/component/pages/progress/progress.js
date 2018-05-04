import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Head from '../../../../components/head/head'
import Foot from '../../../../components/foot/foot'
import './progress.scss'
export default class PageView extends Component {
  config = {
    navigationBarTitleText: 'Progress'
  }
  constructor() {
    super(...arguments)
  }
  render() {
    return (
      <View className="container">
        <Head title="progress" />
        <View className="page-body">
          <View className="page-section">
            <View className="page-section-spacing" style='margin-bottom:104px;'>
              <Progress percent={20} showInfo strokeWidth={2} />
            </View>
            <View className="page-section-spacing">
              <Progress percent={40} strokeWidth={2} active />
            </View>
            <View className="page-section-spacing">
              <Progress percent={60}  strokeWidth={2} active />
            </View>
            <View className="page-section-spacing">
              <Progress percent={80}  strokeWidth={2} active activeColor='blue' />
            </View>
          </View>
        </View>
        <Foot />
      </View>
    )
  }
}
