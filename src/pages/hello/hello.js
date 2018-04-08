import Alien, { Component } from 'alienjs'
import { View, Text, Input, Button, Image } from '@jd/alien-components'

import './hello.scss'

export default class Hello extends Component {
  config = {
    navigationBarTitleText: 'hello'
  }
  
  componentDidMount () {
    console.log('hello mount')
  }

  componentDidShow () {
    console.log('hello show')
  }

  componentDidHide () {
    console.log('hello hide')
  }

  componentWillUnmount () {
    console.log('hello unmount')
  }

  render () {
    return (
      <View className='hello'>
        hello
        <View className='hello_pg'></View>
      </View>
    )
  }
}

