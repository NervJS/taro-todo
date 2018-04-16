import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
export default class Head extends Component {
  render() {
    return (
      <View class="page-head">
        <View class="page-head-title">{this.props.title}</View>
        <View class="page-head-line" />
        {this.props.desc && (
          <View class="page-head-desc">{this.props.desc}</View>
        )}
      </View>
    )
  }
}
