const initialState = {
  messages: [],
  contact:[]
};
const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_CONTACT":
      return {
        ...state,
        contact: action.contact
      };
    default:
      return state;
  }
};

export default chatReducer;
