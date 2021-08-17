export const initialState = {
  mainPosts: [],
  ImagePaths: [],
  postAdded: false,
};

const dummyPost = {
  id: 1,
  User: {
    id: 1,
    nickname: "Sean",
    email: "seanstainability@gmail.com",
  },
  content: "첫 게시글 #해시태그 #테스트",
  Images: [
    {
      src: "https://picsum.photos/400",
    },
    {
      src: "https://picsum.photos/200",
    },
    {
      src: "https://picsum.photos/300",
    },
  ],
  Comments: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "Sean",
        email: "seanstainability@gmail.com",
      },
      content: "하이",
    },
  ],
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";

export const addPost = (data) => {
  return {
    type: ADD_POST_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
      };
    default:
      return state;
  }
};

export default reducer;
