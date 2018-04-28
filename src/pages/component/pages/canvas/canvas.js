import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Head from '../../../../components/head/head'
import Foot from '../../../../components/foot/foot'
import './canvas.scss'
export default class PageView extends Component {
  config = {
    navigationBarTitleText: 'Canvas'
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
              <Text>暂未支持，敬请期待</Text>
            </View>
          </View>
        </View>
        <Foot />
      </View>
    )
  }
}
