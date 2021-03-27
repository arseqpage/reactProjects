import React from 'react';
import * as axios from 'axios';
import style from './users.module.css';
import userPhoto from './../../assets/images/ava.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <span
            onClick={(e) => {
              props.onPageChanged(page);
            }}
            className={`${style.paginationBtn}  ${
              props.currentPage === page ? style.selectedPage : ''
            } `}
            key={index}>
            {page}
          </span>
        );
      })}

      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  src={user.photos.small !== null ? user.photos.small : userPhoto}
                  className={style.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    props.unfollow(user.id);
                  }}>
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id == user.id)}
                  onClick={() => {
                    props.follow(user.id);
                  }}>
                  Follow
                </button>
              )}
            </div>
          </span>

          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{'user.location.country'}</div>
              <div>{'user.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
