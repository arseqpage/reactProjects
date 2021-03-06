import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_TEXT_IN_NEW_POST = 'UPDATE_TEXT_IN_NEW_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
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
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = { id: 5, text: state.newPostText, likesCount: 2 };

      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: '',
      };
    }

    case UPDATE_TEXT_IN_NEW_POST: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateTextInNewPostActionCreator = (text) => ({
  type: UPDATE_TEXT_IN_NEW_POST,
  newText: text,
});

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
