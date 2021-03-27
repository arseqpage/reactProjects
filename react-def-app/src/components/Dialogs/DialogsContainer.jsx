import React from 'react';
import { WithAuthRedirect } from './../hoc/WithAuthRedirect';
import Dialogs from './Dialogs';
import {
  updateNewMessageBodyActionCreator,
  sendMessageActionCreator,
} from '../../redux/messages-reducer';

import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs);
