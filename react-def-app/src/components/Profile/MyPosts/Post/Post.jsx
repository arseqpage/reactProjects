import React from 'react';
import classes from './Post.module.css';

export default function Post({ src, text, likesCount }) {
  return (
    <div className={classes.item}>
      <div>
        <img className={classes.img} src={src} alt="ava" />
        {text}
      </div>
      Likes: {likesCount}
      <button>Like</button>
    </div>
  );
}
