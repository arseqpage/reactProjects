const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
  messages: [
    {
      id: 1,
      message: 'Hi',
    },
    {
      id: 2,
      message: 'Amazina man',
    },
    {
      id: 3,
      message: 'WOw',
    },
    {
      id: 4,
      message: 'Sup dude',
    },
    {
      id: 5,
      message: 'Lol dude',
    },
    {
      id: 6,
      message: 'Milk wow',
    },
    {
      id: 7,
      message: 'Amazing help',
    },
  ],
  dialogs: [
    {
      id: 1,
      name: 'Alex',
      img: 'https://placehold.it/50x50',
    },
    {
      id: 2,
      name: 'Vasily',
      img: 'https://placehold.it/50x50',
    },
    {
      id: 3,
      name: 'Dmitry',
      img: 'https://placehold.it/50x50',
    },
    {
      id: 4,
      name: 'Svetlana',
      img: 'https://placehold.it/50x50',
    },
    {
      id: 5,
      name: 'Vladimir',
      img: 'https://placehold.it/50x50',
    },
    {
      id: 6,
      name: 'Pyotr',
      img: 'https://placehold.it/50x50',
    },
  ],
  newMessageBody: '',
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageBodyActionCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default messagesReducer;
