import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class About extends Component {
  config = {
    navigationBarTitleText: 'about'
  }

  constructor () {
    super(...arguments)
    this.state = {
      text: 'about'
    }
  }

  componentDidMount () {
    console.log('about mount')
  }

  componentDidShow () {
    console.log('about show')
  }

  componentDidHide () {
    console.log('about hide')
  }

  componentWillUnmount () {
    console.log('about unmount')
  }

  navigateTo () {
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }

  navigateBack () {
    Taro.navigateBack({
      delta: 1
    })
  }

  render () {
    const text = this.state.text
    return (
      <View className='about'>
        <Button className='navigate_btn' onClick={this.navigateTo}>push</Button>
        <Button className='navigate_btn' onClick={this.navigateBack}>back</Button>
        <View><Text>{text}</Text></View>
      </View>
    )
  }
}

