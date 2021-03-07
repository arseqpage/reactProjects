import React from 'react';
import style from './MyPosts.module.css';

import Post from './Post/Post';
import {
  addPostActionCreator,
  updateTextInNewPostActionCreator,
} from '../../../redux/profile-reducer';

export default function MyPosts({ newPostText, postsData, dispatch }) {
  const postElements = postsData.map((post, id) => (
    <Post
      src="https://placehold.it/100x100"
      text={post.text}
      likesCount={post.likesCount}
      key={id}
    />
  ));

  const newPostElement = React.createRef();

  const handleAddPost = () => {
    dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    const action = updateTextInNewPostActionCreator(text);

    dispatch(action);
  };

  return (
    <div className={style.postBlock}>
      <h3>My posts</h3>
      <div>
        <textarea value={newPostText} onChange={onPostChange} ref={newPostElement}></textarea>
        <button onClick={handleAddPost}>Add post</button>
      </div>
      <div className={style.posts}>{postElements}</div>
    </div>
  );
}
