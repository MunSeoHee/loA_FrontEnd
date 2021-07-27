import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { Input } from "antd";
import { Button } from 'antd';
import "../App.css";
import {Link} from "react-router-dom";
const { Header, Content} = Layout;


class Login extends React.Component {
  render() {
    return (
      <>
        <Layout style={{ backgroundColor: "rgb(53,53,53)" }}>
          <Header
            style={{
              backgroundColor: "rgb(53,53,53)"
            }}
          >
            Header
          </Header>
          <Content>
            <Row style={{ margin: "25vh" }} justify="center">
              <Col span={7}>
                <Row>아이디</Row>
                <Row>
                  <Input placeholder="ID" />
                </Row>
                <Row style={{marginTop:"2vh"}}>비밀번호</Row>
                <Row>
                  <Input.Password placeholder="password" />
                </Row>
                <Row className="btn"><Button block><Link to="/dashboard">로그인</Link></Button></Row>
                <Row><Button type="primary" block>회원가입</Button></Row>
              </Col>
            </Row>
          </Content>
        </Layout>
      </>
    );
  }
}

export default Login;
