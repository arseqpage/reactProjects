import React from 'react';
import classes from './Navbar.module.css';

import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

export default function Navbar({ state, dispatch }) {
  return (
    <nav className={classes.nav}>
      <NavLink className={classes.item} to="/profile" activeClassName={classes.active}>
        <div>Profile</div>
      </NavLink>
      <NavLink className={classes.item} to="/dialogs" activeClassName={classes.active}>
        <div>Message</div>
      </NavLink>
      <NavLink className={classes.item} to="/users" activeClassName={classes.active}>
        <div>Users</div>
      </NavLink>
      <a className={classes.item} href="#">
        <div>News</div>
      </a>
      <a className={classes.item} href="#">
        <div>Music</div>
      </a>
      <a className={classes.item} href="#">
        <div>Settings</div>
      </a>

      {/* <Friends friends={state} /> */}
    </nav>
  );
}
