import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className={classes.header}>
      <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" />

      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div>
            {' '}
            {props.login} <NavLink to={'/login'}>LogOut</NavLink>
          </div>
        ) : (
          <NavLink to={'/login'}>logIn</NavLink>
        )}
      </div>
    </header>
  );
}
