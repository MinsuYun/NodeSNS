import React, { useState, useCallback } from 'react';
import { Input, Button, Form } from 'antd';
import Link from 'next/link';

const LoginFrom = () => {

  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
  },[])

  const onChangeId = useCallback((e) => {
    setId(e.value)
  },[])

  const onChangePassword = useCallback((e) => {
    setPassword(e.value)
  },[])

  return (
    <Form onSubmit={onSubmitForm} style={{padding:"12px"}}>
    <div>
      <label htmlFor="user-id">아이디</label>
      <br/>
      <Input name="user-id" value={id} onChange={onChangeId} required></Input>
    </div>
    <div>
      <label htmlFor="user-password">비밀번호</label>
      <br/>
      <Input name="user-password" type="password" value={password} onChage={onChangePassword} required></Input>
    </div>
    <div>
  <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
  <Link href="/signup"><a><Button>회원가입</Button></a></Link>
</div>
</Form>
  )
}

export default LoginFrom;