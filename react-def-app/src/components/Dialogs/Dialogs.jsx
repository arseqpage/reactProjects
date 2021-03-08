import React from 'react';
import styles from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

export default function Dialogs(props) {
  const state = props.messagesPage;

  const dialogsElemnts = state.dialogs.map((item, id) => (
    <DialogItem name={item.name} id={item.id} key={id} />
  ));

  const messagesElements = state.messages.map((item, id) => (
    <Message className="message" message={item.message} key={id} />
  ));

  const newMessageBody = state.newMessageBody;

  const handleSendMessage = () => {
    props.sendMessage();
  };

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElemnts}</div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              onChange={onNewMessageChange}
              value={newMessageBody}
              placeholder="Enter new message"></textarea>
          </div>
          <div>
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>

      {/* <textarea ref={newTextRef}></textarea>
      <button onClick={handleShowText}>Click</button> */}
    </div>
  );
}
