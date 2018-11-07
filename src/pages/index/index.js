import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import { diao } from '../../utils'
import dogPic from '../../asset/1.jpg'
// import xx from '../../utils/x.json'
import Tab from '../../components/tab/tab'

// console.log(xx)

import { increment, decrement, asyncInc } from '../../actions/counter'

// const x = require('../../utils/x.json')

class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor () {
    super(...arguments)
    this.state = {
      todos: [],
      githubList: [],
      inputTodoValue: '',
      imagesList: [
        'https://m.360buyimg.com/babel/jfs/t19189/259/982422064/89206/94ed5482/5ab4f6cbNd323ee06.jpg',
        'https://img1.360buyimg.com/da/jfs/t14950/329/2565843691/99347/46a6681f/5ab21540N21d5240c.jpg'
      ]
    }
    // my.confirm({
    //   title: '温馨提示',
    //   content: '您是否想查询快递单号:1234567890',
    //   confirmButtonText: '马上查询',
    //   cancelButtonText: '暂不需要',
    //   success: (result) => {
    //     my.alert({
    //       title: `${result.confirm}`,
    //     });
    //   },
    // });
  }

  addTodoClick = async () => {
    this.addTodo({
      createTime: new Date().getTime(),
      title: this.state.inputTodoValue
    })
    const res = await Taro.request(`https://api.github.com/search/repositories?q=${this.state.inputTodoValue}`)
    if (res.statusCode === 200 || res.statusCode === 201) {
      this.setState({
        githubList: res.data.items
      })
    }
  }

  addTodo (todoItem) {
    const todos = this.state.todos.concat()
    todos.push(todoItem)
    this.setState({
      todos
    })
  }

  setTodoValue = e => {
    this.changeTimer && clearTimeout(this.changeTimer)
    this.changeTimer = setTimeout(() => {
      this.setState({
        inputTodoValue: e.target.value
      })
    }, 10)
  }

  deleteTodo (index, e) {
    e.preventDefault()
    const todos = this.state.todos.concat()
    todos.splice(index, 1)
    this.setState({
      todos
    })
  }

  xxhanlder = () => {
    console.log('sdsddssd')
  }

  componentDidMount () {
    Taro.setStorageSync('user', 'sdsdds')
    console.log(Taro.getStorageSync('user'))
    Taro.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      cancelText: 'sd',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else {
          console.log('用户点击取消')
        }
      }
    })
  }

  componentDidShow () {
    console.log('index show')
  }

  componentDidHide () {
    console.log('index hide')
  }

  componentWillUnmount () {
    console.log('index unmount')
  }

  navigateTo () {
    Taro.navigateTo({
      url: '/pages/about/about'
    })
  }

  navigateBack () {
    Taro.navigateBack({
      delta: 1
    })
  }

  render () {
    return (
      <View className='todo'>
        <Button className='navigate_btn' onClick={this.navigateTo}>push</Button>
        <Button className='navigate_btn' onClick={this.navigateBack}>back</Button>
        <Button className='add_btn' onClick={this.props.inc}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncInc}>async</Button>
        <View>{this.props.counter.num}</View>
        <View>
          <Image src={this.state.imagesList[0]} />
        </View>
        <Tab onXx={this.xxhanlder} t={1} />
        <Tab onXx={this.xxhanlder} t={2} />
        <View>
          <Image src={dogPic} />
        </View>
        <View className="title"><Text>TODO List</Text></View>
        <View className='todo_add'>
          <Input className='todo_add_input' type='text' onInput={this.setTodoValue} />
          <Button className='todo_add_btn' onClick={this.addTodoClick}>添加</Button>
        </View>
        <View className='list'>
          {this.state.todos.map((item, index) => {
            return <View className='list_item'>
              <Text className='list_item_title'>{item.title}</Text>
              <Button className='dele_btn' onClick={this.deleteTodo.bind(this, index)}>x</Button>
            </View>
          })}
        </View>
        <View className='github_list'>
          {this.state.githubList.map((result, index) => {
            return (
              <View class='result'>
                <View>
                  <Text>{result.full_name}</Text>
                  🌟<Text>{result.stargazers_count}</Text>
                </View>
                <Text>{result.description}</Text>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

export default connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  inc () {
    dispatch(increment())
  },
  dec () {
    dispatch(decrement())
  },
  asyncInc () {
    dispatch(asyncInc())
  }
}))(Index)
