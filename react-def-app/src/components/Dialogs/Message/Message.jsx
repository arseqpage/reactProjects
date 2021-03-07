import React from 'react';
import styles from './../Dialogs.module.css';

export default function Message({ message }) {
  return <div className={styles.message}>{message}</div>;
}
