import './picker.scss'

import { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PagePicker extends Component {
  constructor () {
    super(...arguments)
  }

  state = {
    timeSel: '12:01',
    dateSel: '2018-04-22',
    selectorValue: 1,
    mulitSelectorValues: [],
    selector: ['美国', '中国', '巴西', '日本'],
    multiSelector: [['饭', '粥', '粉'], ['猪肉', '牛肉']],
  }

  handleChange = e => {
    this.setState({
      selectorValue: e.detail.value
    })
  }

  handleMulitChange = e => {
    console.log(e.detail)
  }

  handleColumnchange = e => {
    console.log(e.detail)
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
    const { selector, multiSelector, selectorValue, mulitSelectorValues, timeSel, dateSel } = this.state
    return (
      <View className='container'>
        <Header title='Picker'></Header>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>普通选择器</Text>
            </View>
            <View>
              <Picker
                mode='selector'
                range={selector}
                value={selectorValue}
                onChange={this.handleChange}>
                <View className='picker'>
                  当前选择：{selector[selectorValue]}
                </View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>多行选择器</Text>
            </View>
            <View>
              <Picker
                mode='multiSelector'
                range={multiSelector}
                onChange={this.handleMulitChange}
                onColumnchange={this.handleColumnchange}>
                <View className='picker'>
                  当前选择：{mulitSelectorValues}
                </View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>时间选择器</Text>
            </View>
            <View>
              <Picker mode='time' onChange={this.handleTimeChange} value={timeSel}>
                <View className='picker'>当前选择：{timeSel}</View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>日期选择器</Text>
            </View>
            <View>
              <Picker mode='date' onChange={this.handleDateChange} value={dateSel}>
                <View className='picker'>当前选择：{dateSel}</View>
              </Picker>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
