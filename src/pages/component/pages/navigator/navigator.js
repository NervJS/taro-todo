import Taro, { Component } from '@tarojs/taro'
import { View, Text, Switch } from '@tarojs/components'
import Head from '../../../../components/head/head'
import Foot from '../../../../components/foot/foot'
import './navigator.scss'

export default class PageSwitch extends Component {
  config = {
    navigationBarTitleText: 'Navigator'
  }

  constructor () {
    super(...arguments)
  }

  state = {}

  render () {
    return (
      <View className="container">
        <Head title="navigator"/>
        <View className="page-body">
          <View className="page-section">
            <navigator url='/pages/component/pages/navigatePage/navigatePage' className="navigator">
              <View className="navigator-text">
                跳转到新页面
              </View>
            </navigator>
            <navigator url='/pages/component/pages/redirectPage/redirectPage' className="navigator" open-type='redirect'>
              <View className="navigator-text">
                在当前页打开
              </View>
            </navigator>
          </View>
        </View>
        <Foot/>
      </View>
    )
  }
}
