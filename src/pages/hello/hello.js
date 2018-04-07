import Alien, { Component } from 'alienjs'
import { View, Text, Input, Button, Image } from '@jd/alien-components'

import './hello.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: 'hello'
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

