import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Map } from '@tarojs/components'
import Test from '../../components/test/test.js'
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

  onClick = () => {
    console.log('click')
  }

  handleClick = () => {
    console.log(this, 'click in about')
  }

  render () {
    const text = this.state.text
    return (
      <View className='about'>
        <View onClick={this.handleClick}><Text>{text}</Text></View>
        <Test onClick={this.onClick}/>
        <View className='about__float'>距离底部50px</View>
      </View>
    )
  }
}

