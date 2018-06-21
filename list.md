## Bug
-----

#### Text

* space 和 decode 无效(小程序)

#### ScrollView

* scrollY和scrollX无法保证只能滚动一方
* onScrolltolower和onScrolltoupper异常,代码提示也不对
* scrollWithAnimation无效

#### Swiper

* Swiper滑动效果与小程序存在差异

#### Radio

* value在h5是支持的
* Radio上的OnChange无法工作
* 外部的style作用的元素与预期不符合

#### CheckBox

* CheckBox-Group中onchange事件只返回两个值
* CheckBox的组建的逻辑比较奇怪，使用起来不太方便
* 样式错乱

#### Input
* type在h5上没有生效
* h5和小程序的事件能否同步？onChange和onInput

#### Picker

* multiSelector onChange返回的值不对
* multiSelector 交互存在问题 每一列存在联系 会导致其他列改动
* date 默认格式与文档不一致

#### Switch

* color无效
* checkbox不支持
* __绑定了checked仍然可以随意改动__

#### Slider

* onChange无法获取Value
* __Value设定之后是否固定Value__
* 当动态设置Value的时候,value太小无反应
* 当Value小于最小值的时候 showValue 展示的不是最小值

#### Textarea

* placeholder,autoFocus不支持
* autoHeight文档上面没写支不支持 
* input 指定了value时候 textarea这个元素依然更新内容