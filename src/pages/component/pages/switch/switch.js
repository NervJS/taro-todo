import './switch.scss'

import { Component } from '@tarojs/taro'
import { View, Text, Switch } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageSwitch extends Component {
  constructor () {
    super(...arguments)
  }

  state = {
    isChecked: false
  }

  setIsChecked = (e) => {
    const { detail } = e
    this.setState({
      isChecked: detail.value
    })
  }

  render () {
    return (
      <View className='container'>
        <Header title='Switch'></Header>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>静态展示</Text>
            </View>
            <View className='switch-list'>
              <View className='switch-list__item'>
                <View className='switch-list__text'>关闭</View>
                <Switch></Switch>
              </View>
              <View className='switch-list__item'>
                <View className='switch-list__text'>开启中</View>
                <Switch checked></Switch>
              </View>
              <View className='switch-list__item'>
                <View className='switch-list__text'>更换颜色</View>
                <Switch checked color='#6190E8'></Switch>
              </View>
              <View className='switch-list__item'>
                <View className='switch-list__text'>CheckBox形式</View>
                <Switch type='checkbox'></Switch>
              </View>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>数据绑定</Text>
            </View>
            <View className='switch-list'>
              <View className='switch-list__item'>
                <View className='switch-list__text'>开启中</View>
                <Switch onChange={this.setIsChecked} checked={this.state.isChecked}></Switch>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
