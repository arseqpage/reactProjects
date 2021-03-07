import React from 'react';
import style from './../Friends.module.css';

export default function Friend({ friend }) {
  return (
    <div className={style.friendItem}>
      <img src={friend.img} alt="" />
      <span>{friend.name}</span>
    </div>
  );
}
