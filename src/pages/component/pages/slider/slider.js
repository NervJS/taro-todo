import Taro, { Component } from '@tarojs/taro'
import { View, Text, Slider } from '@tarojs/components'
import Head from '../../../../components/head/head'
import Foot from '../../../../components/foot/foot'

export default class PageSlider extends Component {
    config = {
        navigationBarTitleText: 'Slider'
    }
    constructor() {
        super(...arguments)
    }

    state = {

    }
    render() {
        return (
            <View className="container">
                <Head title="Slider" />
                <View className="page-body">
                    <View className="page-section">
                        <View className="page-section-title">
                            <Text>设置step</Text>
                        </View>
                        <View className="page-section-spacing-reset">
                            <Slider step="1" value="50" />
                        </View>
                    </View>
                    <View className="page-section">
                        <View className="page-section-title">
                            <Text>显示当前value</Text>
                        </View>
                        <View className="page-section-spacing-reset">
                            <Slider step="1" value="50" showValue />
                        </View>
                    </View>
                    <View className="page-section">
                        <View className="page-section-title">
                            <Text>设置最小/最大值</Text>
                        </View>
                        <View className="page-section-spacing-reset">
                            <Slider step="1" value="100" showValue min="50" max="200"/>
                        </View>
                    </View>
                </View>
                <Foot />
            </View>
        )
    }
}
