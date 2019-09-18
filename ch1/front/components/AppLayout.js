import React from 'react';
import { Menu, Input, Button, Row, Col, Card, Avatar, Form } from 'antd';
import Link from 'next/link';
import LoginForm from './LoginFrom'

const dummy = {
  nickname : "윤민수",
  Post: [],
  Followings: ['민수','민아','아빠'],
  Followers: [],
  isLoggedIn : false
};

const AppLayout = ({ children }) => {

  // const onChangeId = () => {}
  // const onChangePassword = () => {}

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle'}}/>
        </Menu.Item>
        <Menu.Item key="signup"><Link href="/signup"><Button><a>회원가입</a></Button></Link></Menu.Item>
      </Menu>
      <Row gutter={15}>
        {/* 전체화면 24 */}
        <Col xs={24} md={8}>
          {dummy.isLoggedIn ? 
          <Card
          actions={[
            <div key="twit">짹짹<br />{dummy.Post.length}</div>,
            <div key="following">팔로잉<br />{dummy.Followings.length}</div>,
            <div key="follower">팔로워<br />{dummy.Followers.length}</div>,
          ]}>
            <Card.Meta 
              avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
              title={dummy.nickname}
            />
          </Card>
          :
        <LoginForm />
          }
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={8}></Col>
      </Row>

    </div>
  )
}

export default AppLayout;