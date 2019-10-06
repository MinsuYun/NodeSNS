import React, {useCallback, useState, useEffect} from 'react';
import { Form, Input, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';

const PostForm = () => {

  const [text, setText] = useState('');

  const { imagePaths, isAddingPost, postAdded } = useSelector( state => state.post )
  const dispatch = useDispatch();

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: ADD_POST_REQUEST,
      data: {
        text
      }
    })
  },[])
  
  //어떤 특정 조건일 때 효과를 줄 때는, useEffect를 사용한다
  useEffect(() => {
    setText('');
  }, [postAdded === true])


  const onChangeText = useCallback((e) => {
    e.preventDefault();
    setText(e.target.value);
  },[])

  return (
    <Form onSubmit={onSubmitForm} style={{margin: "20px 0 20px 0"}} encType='multipart/form-data'>
      <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" onChange={onChangeText}/>
      <div style={{marginTop:"5px"}}>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right'}} htmlType="submit" loading={isAddingPost}>짹짹</Button>
      </div>
      <div style={{marginTop:"40px"}}>
        { imagePaths.map( (v,i) => {
          return (
            <div key={v} style={{ display: 'inline-block'}}>
              <img src={'http://localhost:3000/' +{v}} style ={{width:'200px'}} alt={v} />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          )
        })}
      </div>
    </Form>
  )
}

export default PostForm;