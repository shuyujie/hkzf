import React from 'react'
import { Route } from 'react-router-dom'
import Index from './Index/index.js'
import House from './House'
import My from './My'
import News from './News'
import './index.scss'
import { TabBar } from 'antd-mobile'

const TabList = [
  { title: '首页', icon: 'icon-ind', path: '/home' },
  { title: '找房', icon: 'icon-findHouse', path: '/home/house' },
  { title: '资讯', icon: 'icon-infom', path: '/home/news' },
  { title: '我的', icon: 'icon-my', path: '/home/my' }
]

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: props.location.pathname,
      hidden: false,
      fullScreen: true
    }
  }

  render() {
    return (
      <div className="home">
        {/* 路由规则 */}
        <Route exact path="/home" component={Index} />
        <Route path="/home/house" component={House} />
        <Route path="/home/news" component={News} />
        <Route path="/home/my" component={My} />
        {/* 导航链接 */}
        <div className="nav">
          <TabBar
            unselectedTintColor="#888"
            tintColor="#21b97a"
            barTintColor="white"
            noRenderContent
          >
            {TabList.map(item => (
              <TabBar.Item
                title={item.title}
                key={item.title}
                icon={<i className={`iconfont ${item.icon}`} />}
                selectedIcon={<i className={`iconfont ${item.icon}`} />}
                selected={this.state.selectedTab === item.path}
                // badge={999}
                onPress={() => {
                  this.setState({
                    selectedTab: item.path
                  })
                  this.props.history.push(item.path)
                }}
              />
            ))}
          </TabBar>
        </div>
      </div>
    )
  }
}

export default Home
