import './text.scss'

import { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageView extends Component {
  constructor () {
    super(...arguments)

    this.state = {
      contents: []
    }
  }

  add = e => {
    const cot = this.state.contents
    cot.push({ text: 'hello world' })
    this.setState(() => {
      return { contents: cot }
    })
  }

  remove = e => {
    const cot = this.state.contents
    cot.pop()
    this.setState(() => {
      return { contents: cot }
    })
  }

  render () {
    return (
      <View className='container'>
        <Header title='Text'></Header>
        <View className='page-body'>
          <View className='page-section'>
            <Text selectable>可选择的文字</Text>
          </View>
          <View className='page-section'>
            <Text>不可选择的文字</Text>
          </View>
          <View className='wxapp-block'>
            <View className='sub-title'>仅工作在小程序</View>
            <View className='page-section'>
              <Text>不支持多          空格文字</Text>
            </View>
            <View className='page-section'>
              <Text space='ensp'>多          空格文字(ensp)</Text>
            </View>
            <View className='page-section'>
              <Text space='emsp'>多          空格文字(emsp)</Text>
            </View>
            <View className='page-section'>
              <Text space='nbsp'>多          空格文字(nbsp)</Text>
            </View>
            <View className='page-section'>
              <Text>不解码文字&gt;</Text>
            </View>
            <View className='page-section'>
              <Text decode>解码文字&gt;</Text>
            </View>
          </View>

        </View>
      </View>
    )
  }
}
