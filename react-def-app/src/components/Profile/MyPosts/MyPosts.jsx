import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

export default function MyPosts(props) {
  const postElements = props.posts.map((post, id) => (
    <Post
      src="https://placehold.it/100x100"
      text={post.text}
      likesCount={post.likesCount}
      key={id}
    />
  ));

  const newPostElement = React.createRef();

  const handleAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateTextInNewPost(text);
  };

  return (
    <div className={style.postBlock}>
      <h3>My posts</h3>
      <div>
        <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement}></textarea>
        <button onClick={handleAddPost}>Add post</button>
      </div>
      <div className={style.posts}>{postElements}</div>
    </div>
  );
}
