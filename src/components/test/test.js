import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
export default class Test extends Component {
  handleClick = (e) => {
    this.props.onClick(e)
  }
  render () {
    const { onClick } = this.props
    console.log(this, 'in Test')
    return (
      <View>
        <View onClick={this.props.onClick}>Test</View>
      </View>
    )
  }
}
