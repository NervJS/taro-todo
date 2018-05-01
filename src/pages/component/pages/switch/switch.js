import Taro, { Component } from '@tarojs/taro'
import { View, Text, Switch } from '@tarojs/components'
import Head from '../../../../components/head/head'
import Foot from '../../../../components/foot/foot'
import './switch.scss'

export default class PageSwitch extends Component {
    config = {
        navigationBarTitleText: 'Switch'
    }
    constructor() {
        super(...arguments)
    }

    state = {

    }
    render() {
        return (
            <View className="container">
                <Head title="Switch" />
                <View className="page-body">
                    <View className="page-section">
                        <View className="page-section-title">
                            <Text>默认样式</Text>
                        </View>
                        <View className="page-section-spacing-reset">
                            <Switch checked />
                            <Switch />
                        </View>
                    </View>
                    <View className="page-section">
                        <View className="page-section-title">
                            <Text>推荐展示样式</Text>
                        </View>
                        <View className="switch-list">
                            <View className="switch-list__item">
                                <View className="switch-list__text">开启中</View>
                                <Switch checked />
                            </View>
                            <View className="switch-list__item">
                                <View className="switch-list__text">关闭</View>
                                <Switch />
                            </View>
                        </View>
                    </View>
                </View>
                <Foot />
            </View>
        )
    }
}
