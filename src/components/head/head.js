import { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
export default class Head extends Component {
  render() {
    return (
      <View className="page-head">
        <View className="page-head-title">{this.props.title}</View>
        <View className="page-head-line" />
        {this.props.desc && (
          <View className="page-head-desc">{this.props.desc}</View>
        )}
      </View>
    )
  }
}
