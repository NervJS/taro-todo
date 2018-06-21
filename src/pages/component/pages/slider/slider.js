import { Component } from '@tarojs/taro'
import { View, Button, Text, Slider } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageSlider extends Component {
  constructor () {
    super(...arguments)
  }

  state = {
    value: 50
  }

  setValue = () => {
    const value = Math.floor(Math.random() * 100)
    console.log(value)
    this.setState({
      value
    })
  }

  handleChaning = e => {

  }

  handleChange = e => {

  }

  render () {
    return (
      <View className='container'>
        <Header title='Slider'></Header>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>设置step</Text>
            </View>
            <View className='page-section-spacing-reset'>
              <Slider step={1} value={50}></Slider>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>显示当前的value</Text>
            </View>
            <View className='page-section-spacing-reset'>
              <Slider step={1} value={50} showValue></Slider>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>设置最小/最大值</Text>
            </View>
            <View className='page-section-spacing-reset'>
              <Slider step={1} value={100} showValue min={50} max={200}></Slider>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>UI设置</Text>
            </View>
            <View className='page-section-spacing-reset'>
              <Slider step={1} value={50} activeColor='#6190E8' backgroundColor='red' blockColor='#333' blockSize={20}></Slider>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>数据绑定</Text>
            </View>
            <View className='page-section-spacing-reset'>
              <Button onClick={this.setValue}>Set Value</Button>
              <Slider step={1} value={this.state.value} onChange={this.handleChange} onChanging={this.handleChaning} showValue min={50} max={200}></Slider>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
