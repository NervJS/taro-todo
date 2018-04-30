import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Head from '../../../../components/head/head'
import Foot from '../../../../components/foot/foot'
import './swiper.scss'

export default class PageView extends Component {
  config = {
    navigationBarTitleText: 'Swiper'
  }

  constructor () {
    super(...arguments)
  }

  render () {
    return (
      <View className="container">
        <Head title="swiper"/>
        <View className="page-body">
          <View className="page-section">
            <Swiper autoplay={false}
                    indicatorDots={true}
                    slideMult='10'
                    duration='300'
                    interval='3000'
                    indicatorColor='#999'
                    indicatorActiveColor='#333'
                    current='0'
                    circular={true}
                    preMargin='20'>
              <SwiperItem>
                <View class='content' style='height:100%;background-color:rgb(26,173,25);'>A</View>
              </SwiperItem>
              <SwiperItem>
                <View class='content' style='height:100%;background-color:rgb(39,130,215);'>B</View>
              </SwiperItem>
              <SwiperItem>
                <View class='content' style='height:100%;background-color:rgb(241,241,241);color: #333;'>C</View>
              </SwiperItem>
            </Swiper>
          </View>
          <View className="page-section">
            <View className="switch-list">
              <View className="switch-list__item">
                <View className="switch-list__text">指示点</View>
                <Switch checked />
              </View>
              <View className="switch-list__item">
                <View className="switch-list__text">自动播放</View>
                <Switch />
              </View>
            </View>
          </View>
          <View className="page-section">
            <View className="page-section-title">
              <Text>幻灯片切换时长(ms)</Text>
            </View>
            <View className="page-section-spacing-reset">
              <Slider step="1" value="50" showValue  min="500" max="2000"/>
            </View>
          </View>
          <View className="page-section">
            <View className="page-section-title">
              <Text>自动播放间隔时长(ms)</Text>
            </View>
            <View className="page-section-spacing-reset">
              <Slider step="1" value="100" showValue min="2000" max="10000"/>
            </View>
          </View>
        </View>
        <Foot/>
      </View>
    )
  }
}
