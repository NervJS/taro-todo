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
            <View className="page-section-title">
              <Text>flex-direction: row\n横向布局</Text>
            </View>
              {/*<Swiper autoplay=false*/}
                      {/*indicatorDots=true*/}
                      {/*slideMult='10'*/}
                      {/*duration='300'*/}
                      {/*interval='3000'*/}
                      {/*indicatorColor='blue'*/}
                      {/*indicatorActiveColor='red'*/}
                      {/*current='0'*/}
                      {/*circular=true*/}
                      {/*preMargin='20'>*/}
                {/*<view className='swiper_item'>*/}
                  {/*<View style='height:100px;background-color:#FF6164;display:inline-block;width:200px;'/>*/}
                  {/*<View style='height:100px;background-color:#FF6164;display:inline-block;width:200px;'/>*/}
                  {/*<View style='height:100px;background-color:#FF6164;display:inline-block;width:200px;'/>*/}
                {/*</view>*/}
              {/*</Swiper>*/}
          </View>
          <View className="page-section">
            <View className="page-section-title">
              <Text>flex-direction: column\n纵向布局</Text>
            </View>
            <View className="flex-wrp" style="flex-direction:column;">
              <View className="flex-item flex-item-V demo-text-1"/>
              <View className="flex-item flex-item-V demo-text-2"/>
              <View className="flex-item flex-item-V demo-text-3"/>
            </View>
          </View>
        </View>
        <Foot/>
      </View>
    )
  }
}
