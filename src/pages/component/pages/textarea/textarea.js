import { Component } from '@tarojs/taro'
import { View, Text, Textarea } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageTextarea extends Component {
  constructor() {
    super(...arguments)
  }

  state = {
    value: '暂未付',
    isDisabled : true
  }

  handleClick = () => {
    this.setState({
      value: '你看看！！！！@#',
      isDisabled: false
    })
  }

  blur= () => {
    console.log('blur');
    
  }

  focus = () => {
    console.log('focus')
  }

  input = (e) => {
    console.log(e);
  }

  render() {
    return (
      <View className='container'>
        <Header title='Textarea'></Header>
        <View onClick={this.handleClick}>handleClick</View>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>输入区域高度自适应，不会出现滚动条</Text>
            </View>
            <View>
              <Textarea maxlength='20' onFocus={this.focus} onBlur={this.blur} value={this.state.value} placeholder='暂未付' autoHeight onInput={this.input}></Textarea>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>这是一个可以自动聚焦的textarea</Text>
            </View>
            <View>
              <Textarea autoFocus></Textarea>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
