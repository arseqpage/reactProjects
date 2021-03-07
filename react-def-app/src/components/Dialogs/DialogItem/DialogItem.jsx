import React from 'react';
import styles from './../Dialogs.module.css';

import { NavLink } from 'react-router-dom';

export default function DialogItem({ name, id }) {
  let path = `/dialogs/${id}`;
  return (
    <div className={styles.dialogItems + ' ' + styles.active}>
      <NavLink className={styles.dialog} to={path} activeClassName={styles.active}>
        {name}
      </NavLink>
    </div>
  );
}
