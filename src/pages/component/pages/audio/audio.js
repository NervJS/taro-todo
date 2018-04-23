import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Head from '../../../../components/head/head'
import Foot from '../../../../components/foot/foot'
import './audio.scss'
export default class PageView extends Component {
  config = {
    navigationBarTitleText: 'audio'
  }
  constructor() {
    super(...arguments)
  }
  render() {
    return (
      <View className="container">
        <Head title="audio" />
        <View className="page-body">
          <View className="page-section">
            <View className="page-section-title">
              <Text>flex-direction: row\n横向布局</Text>
            </View>
            <View className="page-section-spacing">
              {/*<Audio*/}
                {/*src='http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'*/}
                {/*controls=true*/}
                {/*autoplay=false*/}
                {/*loop=false*/}
                {/*muted=true*/}
                {/*initialTime='30'*/}
                {/*id='video'*/}
              {/*/>*/}
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
