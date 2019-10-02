import React, { useState, useCallback } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { signupAction } from '../reducers/user';

const Signup = () => {

  const dispatch = useDispatch();
  //state 기본
  //state를 처음 설정할 때는 기본적으로 useState를 통해 초기 셋팅을 한다.
  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  //state 에러상황
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    dispatch(signupAction({
      id, password, nickname
    }));
    //검증로직
    if(password !== passwordCheck) {
      return setPasswordError(true);
    }
    if(!term) {
      return setTermError(true);
    }
    console.log(
      {id, nickname, password, passwordCheck, term}
    )
  }, [password, passwordCheck, term]);

  const onChangeId = useCallback ((e) => {
    setId(e.target.value);
  },[]);

  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
  },[]);

  const onChangePassword = useCallback ((e) => {
    setPassword(e.target.value);
  },[]);

  const onChangePasswordCheck = useCallback( (e) => {
    setPasswordError(e.target.value !== password );
    setPasswordCheck(e.target.value);
  },[password]);

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  },[]);
  

  return (
    <>
    <Form onSubmit={onSubmit} style={{padding:"20px"}}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" required value={id} onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor="user-nickname">닉네임</label>
        <br />
        <Input name="user-nickname" required value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" required value={password} type="password" onChange={onChangePassword} />
      </div>
      <div>
        <label htmlFor="user-passwordCheck">비밀번호 확인</label>
        <br />
        <Input name="user-passwordCheck" required type="password" value={passwordCheck} onChange={onChangePasswordCheck} />
        {passwordError && <div style={{color:"red"}}>비밀번호가 일치하지 않습니다</div>}
      </div>
      <div>
        <Checkbox name="user-term" value={term} onChange={onChangeTerm}>약관에 동의합니다</Checkbox>
        {termError && <div style={{color:"red"}}>약관에 동의하셔야 합니다</div>}
      </div>
      <div>
        <Button type="primary" htmlType="submit">가입하기</Button>
      </div>
    </Form>
    </>
  )
}

export default Signup;