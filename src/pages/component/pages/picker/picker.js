import './picker.scss'

import { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PagePicker extends Component {
  constructor () {
    super(...arguments)
  }

  state = {
    selector: ['美国', '中国', '巴西', '日本'],
    selectorChecked: '美国',
    timeSel: '12:01',
    dateSel: '2018-04-22'
  }

  handleChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  handleTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  handleDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  render () {
    return (
      <View className='container'>
        <Header title='Picker'></Header>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>地区选择器</Text>
            </View>
            <View>
              <Picker
                mode='selector'
                range={this.state.selector}
                onChange={this.handleChange}>
                <View className='picker'>
                  当前选择：{this.state.selectorChecked}
                </View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>时间选择器</Text>
            </View>
            <View>
              <Picker mode='time' onChange={this.handleTimeChange}>
                <View className='picker'>当前选择：{this.state.timeSel}</View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>日期选择器</Text>
            </View>
            <View>
              <Picker mode='date' onChange={this.handleDateChange}>
                <View className='picker'>当前选择：{this.state.dateSel}</View>
              </Picker>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
