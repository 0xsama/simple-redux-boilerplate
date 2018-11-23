const defaultState = {
  appName: "Redux Bolierplate",
  appLoaded: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "APP_LOADED":
      return {
        ...state,
        appLoaded: action.payload
      };
    default:
      return state;
  }
};
