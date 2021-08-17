export const initialState = {
  me: null,
};

export const CHANGE_NICKNAME = "CHANGE_NICKNAME";
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";

export const changeNickname = (data) => {
  return {
    type: CHANGE_NICKNAME,
    data,
  };
};

export const logIn = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT_REQUEST,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        me: action.data,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;
