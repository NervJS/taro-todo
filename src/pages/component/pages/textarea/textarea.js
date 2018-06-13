import { Component } from '@tarojs/taro'
import { View, Text, Textarea } from '@tarojs/components'

export default class PageTextarea extends Component {
  config = {
    navigationBarTitleText: 'Textarea'
  }
  constructor () {
    super(...arguments)
  }

  state = {}
  render () {
    return (
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>输入区域高度自适应，不会出现滚动条</Text>
            </View>
            <View>
              <Textarea
                style='background:#fff;width:100%;min-height:80px;padding:0 30px;'
                autoHeight ></Textarea>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>这是一个可以自动聚焦的textarea</Text>
            </View>
            <View>
              <Textarea
                style='background:#fff;width:100%;height:80px;padding:0 30px;'
                autoFocus ></Textarea>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
