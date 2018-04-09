import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

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
        <View onClick={this.handler}>componentTab{this.props.t}</View>
      </View>
    )
  }
}

export default Tab
