import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';

const store = {
  _state: {
    friends: [
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
    ],

    profilePage: {
      postsData: [
        {
          id: 1,
          text: 'Hi my name Kojako',
          likesCount: 12,
        },
        {
          id: 2,
          text: 'Hi my name Rocky',
          likesCount: 22,
        },
        {
          id: 3,
          text: 'Hi my name Jimmy',
          likesCount: 22,
        },
        {
          id: 4,
          text: 'Hi my name Molly',
          likesCount: 22,
        },
      ],
      newPostText: 'textinarea',
    },

    messagesPage: {
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
    },
    sidebar: {},
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _callSubscriber() {
    console.log('State changed');
  },

  dispatch(action) {
    // { type: 'ACTION_NAME'}
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

window.store = store;
export default store;
