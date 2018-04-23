import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Head from '../../../../components/head/head'
import Foot from '../../../../components/foot/foot'
import './view.scss'

export default class PageView extends Component {
  config = {
    navigationBarTitleText: 'image'
  }

  constructor () {
    super(...arguments)
  }

  render () {
    return (
      <View className="container">
        <Head title="image"/>
        <View className="page-body">
          <View className="page-section">
            <View className="page-section-title">
              <Text>Local Image</Text>
            </View>
            <View className="page-section-spacing">
              <Image
                // mode='aspectfill'
                style='width: 300px;height: 100px;background: #fff;'
                src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
              />
            </View>
          </View>
          <View className="page-section">
            <View className="page-section-title">
              <Text>Internet Image</Text>
            </View>
            <View className="flex-wrp" style="flex-direction:column;">
              <View className="page-section-spacing">
                <Image
                  // mode='aspectfill'
                  style='width: 300px;height: 100px;background: #fff;'
                  src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
                />
              </View>
            </View>
          </View>
        </View>
        <Foot/>
      </View>
    )
  }
}
