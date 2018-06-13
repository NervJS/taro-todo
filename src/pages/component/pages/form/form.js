import { Component } from '@tarojs/taro'

// RadioGroup ,Form ,CheckboxGroup
import {
  View,
  Text,
  Label,
  Radio,
  Checkbox,
  Slider,
  Input,
  Button,
  RadioGroup,
  Form,
  CheckboxGroup,
  Switch
} from '@tarojs/components'

export default class PageForm extends Component {
  config = {
    navigationBarTitleText: 'Form'
  }
  constructor () {
    super(...arguments)
  }

  state = {
    radioItem: [
      {
        key: '1',
        value: '选项一',
        checked: false
      },
      {
        key: '2',
        value: '选项二',
        checked: false
      }
    ],
    checkItem: [
      {
        key: '1',
        value: '选项一',
        checked: false
      },
      {
        key: '2',
        value: '选项二',
        checked: false
      }
    ],
    sliderValue: 50
  }

  onHandleChange = e => {
    console.log(e)
  }

  onRadioChange = e => {
    console.log(e)
  }

  onCheckChange = e => {
    console.log(e)
  }

  handleSliderChange = e => {
    console.log(e)
  }

  handleSliderChanging = e => {
    console.log(e)
  }

  formSubmit = e => {
    console.log(e)
  }

  formReset = e => {
    console.log(e)
  }

  render () {
    return (
      <View className='container'>
        <View className='page-body'>
          <Form onSubmit={this.formSubmit} onReset={this.formReset}>
            <View className='page-section'>
              <View className='page-section-title'>
                <Text>switch</Text>
              </View>
              <View className='page-section-spacing-reset'>
                <Switch onChange={this.onHandleChange} name='switch' ></Switch>
              </View>
            </View>
            <View className='page-section'>
              <View className='page-section-title'>
                <Text>radio</Text>
              </View>
              <View className='page-section-spacing-reset'>
                <RadioGroup onChange={this.onRadioChange} name='radio'>
                  {this.state.radioItem.map(item => {
                    return (
                      <Label for={item.key} key={item.key}>
                        <Radio value={item.key} checked={item.checked}>
                          <Text>{item.value}</Text>
                        </Radio>
                      </Label>
                    )
                  })}
                </RadioGroup>
              </View>
            </View>
            <View className='page-section'>
              <View className='page-section-title'>
                <Text>checkbox</Text>
              </View>
              <View className='page-section-spacing-reset'>
                <CheckboxGroup onChange={this.onCheckChange} name='check'>
                  {this.state.checkItem.map(item => {
                    return (
                      <Label for={item.key} key={item.key}>
                        <Checkbox value={item.key} checked={item.checked}>
                          <Text>{item.value}</Text>
                        </Checkbox>
                      </Label>
                    )
                  })}
                </CheckboxGroup>
              </View>
            </View>
            <View className='page-section'>
              <View className='page-section-title'>
                <Text>slider</Text>
              </View>
              <View className='page-section-spacing-reset'>
                <Slider
                  name='slider'
                  value={this.state.sliderValue}
                  showValue
                  onChange={this.handleSliderChange}
                  bingchanging={this.handleSliderChanging} ></Slider>
              </View>
            </View>
            <View className='page-section'>
              <View className='page-section-title'>
                <Text>input</Text>
              </View>
              <View
                className='page-section-spacing-reset'
                style='background:#fff;padding:15px 30px;'>
                <Input
                  name='input'
                  type='text'
                  placeholder={'这是一个输入框'}
                  onChange={this.onHandleChange} ></Input>
              </View>
            </View>
            <View className='page-section'>
              <View className='page-section-spacing-reset'>
                <Button formType='submit' type='primary'>
                  Submit
                </Button>
                <Button formType='reset' type='default'>
                  Reset
                </Button>
              </View>
            </View>
          </Form>
        </View>
      </View>
    )
  }
}
