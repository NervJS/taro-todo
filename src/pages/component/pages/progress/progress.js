import './progress.scss'

import { Component } from '@tarojs/taro'
import { View, Progress, Button } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageView extends Component {
  constructor() {
    super(...arguments)
    this.timmer = null
  }

  state = {
    progress: 0
  }

  handleStart = () => {
    if (this.timmer) return
    this.timmer = setInterval(() => {
      this.setState({
        process: ++this.state.progress
      })
    }, 500)
  }

  handleStop = () => {
    if (this.timmer) {
      clearImmediate(this.timmer)
      this.timmer = null
    }
  }

  handleReset = () => {
    this.handleStop()
    this.setState({
      process: 0
    })
  }

  render() {
    const { progress } = this.state
    return (
      <View className='container'>
        <Header title='Progress'></Header>
        <View className='page-body'>
          <View className='page-section'>
            <View className='progress-block'>
              <View className='page-section-spacing'>
                <Progress percent={20} showInfo strokeWidth={2} ></Progress>
              </View>
            </View>
            <View className='progress-block'>
              <View className='page-section-spacing'>
                <Progress percent={40} strokeWidth={2} active ></Progress>
              </View>
              <View className='page-section-spacing'>
                <Progress percent={60} strokeWidth={2} active ></Progress>
              </View>
              <View className='page-section-spacing'>
                <Progress
                  percent={80}
                  strokeWidth={2}
                  active
                  activeColor='blue' ></Progress>
              </View>
            </View>
            <View>{progress}</View>
            <View className='progress-block'>
              <View className='page-section-spacing '>
                <Progress
                  percent={progress}
                  strokeWidth={2}
                  active
                  activeColor='#3C7FE8' ></Progress>
                <View>
                  <Button onClick={this.handleStart}>加载</Button>
                  <Button onClick={this.handleStop}>暂停</Button>
                  <Button onClick={this.handleReset}>重置</Button>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
