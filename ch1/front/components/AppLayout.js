import React from 'react';
import { Menu, Input, Button, Row, Col } from 'antd';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import LoginForm from './LoginFrom';
import UserProfile from './UserProfile';


//여기서 children은 각각 개별 page들을 의미한다. pages/_app.js 에서 <Component />를 AppLayout로 감싸줌과 동시에 AppLayout 컴포턴트에서도 children을 불러와야한다.
const AppLayout = ({ children }) => {

  const { isLoggedIn } = useSelector ( state => state.user );
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
          {isLoggedIn ? 
        <UserProfile />
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