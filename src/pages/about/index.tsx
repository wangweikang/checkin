import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {} from 'taro-ui'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
    }
  }

  handleChange(value: any) {
    this.setState({
      value
    })
  }

  onSubmit(event) {
    console.log(event)
  }

  onReset(event) {
    console.log(event)
  }

  config: Config = {
    navigationBarTitleText: '关于我们'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        关于我们
      </View >
    )
  }
}
