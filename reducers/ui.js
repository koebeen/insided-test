const initialState = {
  multiSelectOpen: false
}
const ui = (state = initialState, action) => {
  switch (action.type) {
    case 'MULTI_SELECT_EVENT':
      return {
        multiSelectOpen: action.open
      }
    default:
      return state;
  }
}

export default ui;