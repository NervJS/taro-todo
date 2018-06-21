import './scroll-view.scss'

import { Component } from '@tarojs/taro'
import { View, Text, ScrollView, Button } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageView extends Component {
  constructor () {
    super(...arguments)
  }

  state = {
    top: 0,
    left: 0
  }

  setPosition = () => {
    this.setState({
      top: Math.floor(Math.random() * 150),
      left: Math.floor(Math.random() * 150)
    })
  }

  render () {
    const { top, left } = this.state
    return (
      <View className='container'>
        <Header title='ScrollView'></Header>
        <View className='page-body'>
          <Button className="test-button" type='default' onClick={this.setPosition}> Set Position left : {left}  tops : {top}</Button>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>Vertical Scroll 纵向滚动</Text>
            </View>
            <ScrollView
              scrollY
              scrollTop={top}
              scrollWithAnimation
              style='height: 150px;'
              className='scrollview'
              onScrolltolower={e => console.log('First Scrolltolower')}
              onScrolltoupper={e => console.log('First Scrolltoupper')}>
              <View style='width:300px;height:150px;background-color:rgb(26,173,25);'>
                A
              </View>
              <View style='height:150px;background-color:rgb(39,130,215);'>
                B
              </View>
              <View style='height:150px;background-color:rgb(241,241,241);color: #333;'>
                C
              </View>
            </ScrollView>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text> Horizontal 横向滚动</Text>
            </View>
            <ScrollView
              className='scrollview'
              scrollX
              scrollLeft={left}
              style='white-space: nowrap;'
              onScrolltolower={e => console.log('Second Scrolltolower')}
              onScrolltoupper={e => console.log('Second Scrolltoupper')}>
              <View style='height:150px;background-color:rgb(26,173,25);display:inline-block;width: 300px;'>
                A
              </View>
              <View style='height:150px;background-color:rgb(39,130,215);display:inline-block;width: 300px;'>
                B
              </View>
              <View style='height:150px;background-color:rgb(241,241,241);display:inline-block;width: 300px;color: #333;'>
                C
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}
