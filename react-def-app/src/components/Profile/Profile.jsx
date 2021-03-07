import React from 'react';
import classes from './Profile.module.css';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default function Profile({ profilePage, dispatch }) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postsData={profilePage.postsData}
        newPostText={profilePage.newPostText}
        dispatch={dispatch}
      />
    </div>
  );
}
