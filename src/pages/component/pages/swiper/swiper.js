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
    this.state = {
      autoplay: false,
      indicatorDots: true,
      interval: '5000',
      duration: '500'
    }
  }

   hideIndication (e) {
     this.setState({
       indicatorDots: !this.state.indicatorDots
     })
  }

  isAutoPlay() {
    this.setState({
      autoplay: !this.state.autoplay
    })
  }

  setInterval (e) {
    this.setState({
      interval: e.detail.value
    })
  }

  setDuration (e) {
    this.setState({
      duration: e.detail.value
    })
  }

  render () {
    return (
      <View className="container">
        <Head title="swiper"/>
        <View className="page-body">
          <View className="page-section">
            <Swiper autoplay={this.state.autoplay}
                    indicatorDots={this.state.indicatorDots}
                    slideMult='10'
                    duration={this.state.duration}
                    interval={this.state.interval}
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
                <Switch checked onChange={this.hideIndication} />
              </View>
              <View className="switch-list__item">
                <View className="switch-list__text">自动播放</View>
                <Switch onChange={this.isAutoPlay} />
              </View>
            </View>
          </View>
          <View className="page-section">
            <View className="page-section-title">
              <Text>幻灯片切换时长(ms)</Text>
            </View>
            <View className="page-section-spacing-reset">
              <Slider step="1" value="50" showValue  min="500" max="2000" onChange={this.setDuration}/>
            </View>
          </View>
          <View className="page-section">
            <View className="page-section-title">
              <Text>自动播放间隔时长(ms)</Text>
            </View>
            <View className="page-section-spacing-reset">
              <Slider step="1" value="100" showValue min="2000" max="10000" onChange={this.setInterval}
                      />
            </View>
          </View>
        </View>
        <Foot/>
      </View>
    )
  }
}
