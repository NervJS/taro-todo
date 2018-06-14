import './swiper.scss'

import { Component } from '@tarojs/taro'
import {
  View,
  Text,
  Swiper,
  SwiperItem,
  Switch,
  Slider
} from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageView extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      autoplay: false,
      indicatorDots: true,
      interval: 0,
      duration: 0
    }
  }

  hideIndication = e => {
    this.setState({
      indicatorDots: !this.state.indicatorDots
    })
  }

  isAutoPlay = () => {
    this.setState({
      autoplay: !this.state.autoplay
    })
  }

  setInterval = e => {
    console.log(e)
    this.setState({
      interval: e.detail.value
    })
  }

  setDuration = e => {
    console.log(e)
    this.setState({
      duration: e.detail.value
    })
  }

  render () {
    return (
      <View className='container'>
        <Header title='Swiper'></Header>
        <View className='page-body'>
          <View className='page-section'>
            <Swiper
              autoplay={this.state.autoplay}
              indicatorDots={this.state.indicatorDots}
              slideMult='10'
              duration={this.state.duration}
              interval={this.state.interval}
              indicatorColor='#999'
              indicatorActiveColor='#333'
              current='0'
              circular
              preMargin='20'>
              <SwiperItem>
                <View
                  className='content'
                  style='height:100%;background-color:rgb(26,173,25);'>
                  A
                </View>
              </SwiperItem>
              <SwiperItem>
                <View
                  className='content'
                  style='height:100%;background-color:rgb(39,130,215);'>
                  B
                </View>
              </SwiperItem>
              <SwiperItem>
                <View
                  className='content'
                  style='height:100%;background-color:rgb(241,241,241);color: #333;'>
                  C
                </View>
              </SwiperItem>
            </Swiper>
          </View>
          <View className='page-section'>
            <View className='switch-list'>
              <View className='switch-list__item'>
                <View className='switch-list__text'>指示点</View>
                <Switch checked onChange={this.hideIndication} ></Switch>
              </View>
              <View className='switch-list__item'>
                <View className='switch-list__text'>自动播放</View>
                <Switch onChange={this.isAutoPlay} ></Switch>
              </View>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>幻灯片切换时长(ms)</Text>
            </View>
            <View className='page-section-spacing-reset'>
              <Slider
                showValue
                step={1}
                min={500}
                max={2000}
                value={this.state.interval}
                onChange={this.setDuration} ></Slider>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>自动播放间隔时长(ms)</Text>
            </View>
            <View className='page-section-spacing-reset'>
              <Slider
                showValue
                step={1}
                min={2000}
                max={10000}
                value={this.state.interval}
                onChange={this.setInterval} ></Slider>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
