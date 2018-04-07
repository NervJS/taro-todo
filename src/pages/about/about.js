import Alien, { Component } from 'alienjs'
import { View, Text } from '@jd/alien-components'

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

  render () {
    const text = this.state.text
    return (
      <View className='about'>
        <Text>{text}</Text>
      </View>
    )
  }
}

