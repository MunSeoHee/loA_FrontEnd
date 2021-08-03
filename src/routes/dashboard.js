import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Radio, Row, Col } from "antd";
import "../css/dashboard.css";
import "antd/dist/antd.css";
import {} from "@ant-design/icons";
import Homework from "../components/homework";
import Register_character from "../components/register_character";
import Naesil from "../components/naesil";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Header, Sider } = Layout;
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Layout>
        <Router>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                onClick={this.handleClick}
                style={{ height: "100vh" }}
                defaultSelectedKeys={["1"]}
                mode="inline"
              >
                
                  <Menu.ItemGroup key="g1" title="Item 1">
                    <Menu.Item key="1">
                      <Link to="/regiCharac">캐릭터 등록</Link>
                    </Menu.Item>

                    <Menu.Item key="2">
                      <Link to="/homework">배력 숙제표</Link>
                    </Menu.Item>
                  </Menu.ItemGroup>
                
              </Menu>
            </Sider>
            <Layout>
              <Header className="header">
                <div className="logo" />
              </Header>
              <Layout>
                
                  <Switch>
                    <Route path="/homework" component={Homework}>
                    </Route>
                    <Route path="/regiCharac" component={Register_character}>
                    </Route>
                    <Route path="/" component={Homework}>
                    </Route>
                  </Switch>
                
              </Layout>
            </Layout>
          </Layout>
          </Router>
        </Layout>
      </>
    );
  }
}

export default Dashboard;
