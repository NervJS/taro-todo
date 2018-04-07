import Alien, { Component } from 'alienjs'
import Index from './pages/index/index'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/index',
      'pages/hello',
      'pages/about'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'TODO List',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}
