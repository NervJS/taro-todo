import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
// bug
import icon_foot from '../../asset/common/icon_foot.png'
console.log(icon_foot)
import footImage from '../../asset/common/icon_foot.png'
export default class Foot extends Component {
  render() {
    return (
      <navigator
        className="page-foot"
        url="/pages/component/index"
        hoverClass="none"
      >
        <Image
          className="icon-foot"
          src={footImage}
        />
      </navigator>
    )
  }
}
