import './radio.scss'

import { Component } from '@tarojs/taro'
import { View, Text, Radio, Label, RadioGroup } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageRadio extends Component {
  constructor () {
    super(...arguments)
  }

  state = {
    isChecked: false,
    selectValue: '中国',
    list: [
      {
        value: '美国',
        text: '美国',
        checked: false
      },
      {
        value: '中国',
        text: '中国',
        checked: true
      },
      {
        value: '巴西',
        text: '巴西',
        checked: false
      },
      {
        value: '日本',
        text: '日本',
        checked: false
      },
      {
        value: '英国',
        text: '英国',
        checked: false
      },
      {
        value: '法国',
        text: '法国',
        checked: false
      }
    ]
  }

  radioChange = e => {
    this.setState({
      selectValue: e.detail.value
    })
  }

  render () {
    return (
      <View className='container'>
        <Header title='Radio'></Header>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>默认样式</Text>
            </View>
            <View className='page-section-spacing-reset'>
              <Radio value='选中' checked>
                选中
              </Radio>
              <Radio style='margin-left: 50px' value='未选中'>
                未选中
              </Radio>
              <Radio style='margin-left: 50px' checked={this.state.isChecked} onChange={this.handleChange}>
                数据绑定
              </Radio>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>推荐展示样式</Text>
            </View>
            <View className='select-box'>
              选中的值是: {this.state.selectValue}
            </View>
            <View>
              <View className='radio-list'>
                <RadioGroup onChange={this.radioChange}>
                  {this.state.list.map((item, i) => {
                    return (
                      <Label className='radio-list__label' for={i} key={i}>
                        <Radio
                          name='radio'
                          value={item.value}
                          checked={item.checked}>
                          {item.text}
                        </Radio>
                      </Label>
                    )
                  })}
                </RadioGroup>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
