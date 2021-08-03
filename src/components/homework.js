import React from 'react';
import { Layout, Radio, Row, Input } from "antd";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import { AudioOutlined } from '@ant-design/icons';
import Weekcontents from './weekContents';
import Daycontents from './dayContents';
const { Header, Content, Sider } = Layout;
const { Search } = Input;

const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
  }
  
  const onSearch = value => console.log(value);
  
class Homework extends React.Component{
    render(){
        return(
            <Router>
                 <Layout style={{ padding: "0 3vw 3vw" }}>
                <Row justify="space-between">
                  <Search
                    className="search"
                    placeholder=""
                    onSearch={onSearch}
                    style={{ width: 200 }}
                  />
                  <Radio.Group className="radio" onChange={onChange} defaultValue="a">
                    <Radio.Button value="a"><Link to="/day">일일 컨텐츠</Link></Radio.Button>
                    <Radio.Button value="b"><Link to="/week">주간 컨텐츠</Link></Radio.Button>
                  </Radio.Group>
                </Row>
                
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                    <Switch>
                    <Route path="/week">
                        <Weekcontents/>
                    </Route>
                    <Route path="/day">
                        <Daycontents/>
                    </Route>
                    <Route path="/">
                        <Daycontents/>
                    </Route>
                    </Switch>
                </Content>
              </Layout>
                
            </Router>
        )
    }
}

export default Homework;

