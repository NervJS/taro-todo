import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Image, Button } from '@tarojs/components'

import { diao } from '../../utils'

import mv from '../../asset/timg.jpg'

import './tab.scss'

import { increment, decrement, asyncInc } from '../../actions/counter'

class Tab extends Component {

  handler = () => {
    console.log(this.props.t)
    console.log(diao)
    this.props.xx()
  }

  render () {
    return (
      <View className='tab'>
        <Button className='add_btn' onClick={this.props.inc}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncInc}>async</Button>
        <View>{this.props.counter.num}</View>
        <Image src={mv}></Image>
        <View onClick={this.handler}>componentTab{this.props.t}</View>
      </View>
    )
  }
}

export default connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  inc () {
    dispatch(increment())
  },
  dec () {
    dispatch(decrement())
  },
  asyncInc () {
    dispatch(asyncInc())
  }
}))(Tab)
