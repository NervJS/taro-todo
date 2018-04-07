import Alien, { Component } from 'alienjs'
import { View } from '@jd/alien-components'

import { diao } from '../../utils'

import './tab.scss'

class Tab extends Component {

  componentDidMount () {

  }

  handler = () => {
    console.log(this.props.t)
    console.log(diao)
    this.props.xx()
  }

  render () {
    return (
      <View className='tab'>
        <View onClick={this.handler}>12</View>
      </View>
    )
  }
}

export default Tab
