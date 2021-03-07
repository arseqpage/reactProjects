const ADD_POST = 'ADD_POST';
const UPDATE_TEXT_IN_NEW_POST = 'UPDATE_TEXT_IN_NEW_POST';

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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = { id: 5, text: state.newPostText, likesCount: 2 };
      state.postsData.push(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_TEXT_IN_NEW_POST:
      state.newPostText = action.newText;
      return state;

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

export default profileReducer;
