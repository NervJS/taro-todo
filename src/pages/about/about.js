import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './about.scss'
export default class About extends Component {
  config = {
    navigationBarTitleText: 'about'
  }

  constructor () {
    super(...arguments)
    this.state = {
      text: 'about~'
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

  render () {
    const text = this.state.text
    return (
      <View className='about'>
        <View><Text>{text}</Text></View>
        <View className='about__float'>距离底部50px</View>
      </View>
    )
  }
}

