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

  navigate () {
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }

  render () {
    const text = this.state.text
    return (
      <View className='about'>
        <Button className='navigate_btn' onClick={this.navigate}>跳转</Button>
        <View><Text>{text}</Text></View>
      </View>
    )
  }
}

