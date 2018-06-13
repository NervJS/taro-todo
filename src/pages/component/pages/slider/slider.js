import { Component } from '@tarojs/taro'
import { View, Text, Slider } from '@tarojs/components'

export default class PageSlider extends Component {
  config = {
    navigationBarTitleText: 'Slider'
  }
  constructor () {
    super(...arguments)
  }

  state = {}
  render () {
    return (
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>设置step</Text>
            </View>
            <View className='page-section-spacing-reset'>
              <Slider step={1} value={50} ></Slider>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>显示当前value</Text>
            </View>
            <View className='page-section-spacing-reset'>
              <Slider step={1} value={50} showValue ></Slider>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>设置最小/最大值</Text>
            </View>
            <View className='page-section-spacing-reset'>
              <Slider step={1} value={100} showValue min={50} max={200} ></Slider>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
