import './text.scss'

import { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

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
            <View className='text_content'>
              {this.state.contents.map(item => {
                return <Text>{item.text}</Text>
              })}
            </View>
          </View>
          <View className='page-section'>
            <View className='flex-wrp' style='flex-direction:column;'>
              <Button
                className='btn-max-w button_style'
                plain
                type='default'
                onClick={this.add}>
                add line
              </Button>
              <Button
                className='btn-max-w button_style'
                plain
                type='default'
                disabled={!this.state.contents.length}
                onClick={this.remove}>
                remove line
              </Button>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
