import React, {useState, useCallback} from 'react';
import {  Button, Card, Avatar, Icon, Form, Input, List, Comment } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post'

const PostCard = ({post}) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onToggleComment = useCallback(()=> {
    setCommentFormOpened(prev => !prev);
  }, []);

  const onSubmitComment = useCallback((e)=> {
    e.preventDefault();
    if(!me) {
      return alert('로그인이 필요합니다')
    }
    return dispatch({
      type: ADD_COMMENT_REQUEST,
    })
  },[]) 

  const onSubmitCommentText = useCallback((e)=>{
    e.preventDefault();
    setCommentText(e.target.value)
  },[])


  return (
    <div>
    <Card
      key={+post.createdAt}
      cover={post.img && <img alt="example" src={post.img} />}
      actions={[
        <Icon type="retweet" key="retweet" />,
        <Icon type="heart" key="heart" />,
        <Icon type="message" key="message" onClick={onToggleComment}/>,
        <Icon type="ellipsis" key="ellipsis" />
      ]}
      extra={<Button>팔로우</Button>}
    >
    <Card.Meta 
      avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
      title={post.User.nickname}
      description={post.content}
    />
    </Card>
      {commentFormOpened && (
        <>
          {/* 댓글입력창 */}
          <Form onSubmit={onSubmitComment}>
            <Form.Item>
              <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
            </Form.Item>
            <Button type="primary" htmlType="submit">삐약</Button>
          </Form>
          {/* 댓글리스트 */}
          <List 
            header={`${post.Comments ? post.Comments.length : 0} 댓글`}
            itemLayout ="horizontal"
            dataSource = {post.Comment || {}}
            renderItem={Item => (
              <li>
                <Comment 
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                  datetime={item.createdAt}
                />
              </li>
            )}
          />
        </>  
      )}
    </div>
  )
}

export default PostCard;