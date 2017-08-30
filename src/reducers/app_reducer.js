const initialState = {
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA": {
      return Object.assign({}, state, action.payload.data, { loading: false });
    }
    default: {
      return state;
    }
  }
};
