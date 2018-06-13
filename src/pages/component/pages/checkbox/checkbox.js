import './checkbox.scss'

import { Component } from '@tarojs/taro'
import { View, Text, Checkbox, Label, CheckboxGroup } from '@tarojs/components'

export default class PageCheckbox extends Component {
  constructor () {
    super(...arguments)
  }

  state = {
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
  checkboxChange = e => {
    console.log(e)
  }
  render () {
    return (
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>默认样式</Text>
            </View>
            <View className='page-section-spacing-reset'>
              <Checkbox value='选中' checked>
                选中
              </Checkbox>
              <Checkbox style='margin-left: 20px' value='未选中'>
                未选中
              </Checkbox>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>推荐展示样式</Text>
            </View>
            <View>
              <View className='checkbox-list'>
                <CheckboxGroup name='checkbox' onChange={this.checkboxChange}>
                  {this.state.list.map(item => {
                    return (
                      <Label
                        className='checkbox-list__label'
                        for={item.value}
                        key={item.value}>
                        <Checkbox
                          className='checkbox-list__checkbox'
                          value={item.value}
                          checked={item.checked}>
                          {item.text}
                        </Checkbox>
                      </Label>
                    )
                  })}
                </CheckboxGroup>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
