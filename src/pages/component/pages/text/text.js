import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Head from '../../../../components/head/head'
import Foot from '../../../../components/foot/foot'
import './text.scss'
export default class PageView extends Component {
  config = {
    navigationBarTitleText: 'text'
  }
  constructor() {
    super(...arguments)
  }
  render() {
    return (
      <View className="container">
        <Head title="text" />
        <View className="page-body">
          <View className="page-section">
            <View className="page-section-title">
              <Text>flex-direction: row\n横向布局</Text>
            </View>
            <View className="page-section-spacing">
              <Text>添加文本</Text>
            </View>
          </View>
          <View className="page-section">
            <View className="page-section-title">
              <Text>flex-direction: column\n纵向布局</Text>
            </View>
            <View className="flex-wrp" style="flex-direction:column;">
              <Button
                size='default'
                type='default'
                disabled=false
              >
                add line
              </Button>
              <Button
                size='default'
                type='default'
                disabled=false
              >
                remove line
              </Button>
            </View>
          </View>
        </View>
        <Foot />
      </View>
    )
  }
}
