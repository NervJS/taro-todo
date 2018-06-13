import { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'

export default class PageInput extends Component {
  config = {
    navigationBarTitleText: 'Input'
  }
  constructor () {
    super(...arguments)
  }

  state = {
    value: ''
  }

  onInput = e => {
    this.setState({
      value: e.detail.value
    })
  }

  render () {
    return (
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>可以自动聚焦的input</Text>
            </View>
            <View
              className='page-section-spacing-reset'
              style='background:#fff;padding:15px 30px;'>
              <Input type='text' placeholder={'将会获取焦点'} focus ></Input>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>控制最大输入长度的input</Text>
            </View>
            <View
              className='page-section-spacing-reset'
              style='background:#fff;padding:15px 30px;'>
              <Input
                type='text'
                placeholder={'最大输入长度为10'}
                maxlength='10' ></Input>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>实时获取输入值:{this.state.value}</Text>
            </View>
            <View
              className='page-section-spacing-reset'
              style='background:#fff;padding:15px 30px;'>
              <Input
                type='text'
                placeholder={'输入同步到view中'}
                value={this.state.value}
                onInput={this.onInput} ></Input>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>数字输入的input</Text>
            </View>
            <View
              className='page-section-spacing-reset'
              style='background:#fff;padding:15px 30px;'>
              <Input type='number' placeholder={'这是一个数字输入框'} ></Input>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>密码输入的input</Text>
            </View>
            <View
              className='page-section-spacing-reset'
              style='background:#fff;padding:15px 30px;'>
              <Input
                type='password'
                password
                placeholder={'这是一个密码输入框'} ></Input>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>带小数点的input</Text>
            </View>
            <View
              className='page-section-spacing-reset'
              style='background:#fff;padding:15px 30px;'>
              <Input type='digit' placeholder={'带小数点的数字键盘'} ></Input>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>身份证输入的input</Text>
            </View>
            <View
              className='page-section-spacing-reset'
              style='background:#fff;padding:15px 30px;'>
              <Input type='idcard' placeholder={'身份证输入键盘'} ></Input>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>控制占位符颜色的input</Text>
            </View>
            <View
              className='page-section-spacing-reset'
              style='background:#fff;padding:15px 30px;'>
              <Input
                type='text'
                placeholder={'占位符字体是红色的'}
                placeholderStyle='color:red' ></Input>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
