import React from 'react';
import Dialogs from './Dialogs';
import {
  updateNewMessageBodyActionCreator,
  sendMessageActionCreator,
} from '../../redux/messages-reducer';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessageActionCreator());
    },
    sendMessage: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
