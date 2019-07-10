import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {
  AtCountdown, AtTimeline, AtButton, AtNoticebar, AtTabBar,
  AtDivider, AtForm, AtTextarea, AtCard,
} from 'taro-ui'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      value: '',
    }
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  handleChange(value) {
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

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <View className='at-row at-row__justify--center'>
          <AtNoticebar marquee>
            这是签到小程序,需开启定位权限.
          </AtNoticebar>
        </View>
        <View className='at-row at-row__justify--center' style='height:50px'>
          <View>签到结束还有:</View>
          <AtCountdown
            isCard
            seconds={10000}
          />
        </View>
        <View className='at-row at-row__justify--center' style='height:50px'>
          <AtButton type='primary'>
            点击签到
          </AtButton>
        </View>

        <View>
          <AtDivider content='活动流程' fontColor='#2d8cf0' lineColor='#2d8cf0' />
        </View>

        <View className='at-row at-row__justify--center' style='height:100px'>
          <AtTimeline
            items={[
              { title: '大会入场' },
              { title: '签到' },
              { title: '介绍' },
              { title: '抽奖' }
            ]}
          >
          </AtTimeline>
        </View>

        <View>
          <AtDivider content='留言板' fontColor='#2d8cf0' lineColor='#2d8cf0' />
        </View>

        <AtCard
          isFull
        >
          <AtForm
            onSubmit={this.onSubmit.bind(this)}
            onReset={this.onReset.bind(this)}
          >
            <AtTextarea
              maxLength={200}
              placeholder='留下你的祝福'
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />
            <View className='at-row at-row__justify--end at-row__justify--around'>
              <AtButton className='at-col at-col-4' formType='submit' type='primary' size='small'>提交</AtButton>
              <AtButton className='at-col at-col-4' formType='reset' type='primary' size='small'>重置</AtButton>
            </View>
          </AtForm>
        </AtCard>
        <View className='tabbar'>
          <AtTabBar
            fixed
            tabList={[
              { title: '首页', iconType: 'home', text: 'new' },
              { title: '活动', iconType: 'bell', dot: true },
              { title: '关于', iconType: 'heart' }
            ]}
            onClick={this.handleClick.bind(this)}
            current={this.state.current}
          />
        </View>
      </View >
    )
  }
}
