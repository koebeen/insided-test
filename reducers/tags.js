import update from 'react/lib/update'
let nextTagId = 0;
const tag = (state, action) => {
  switch (action.type) {
    case 'ADD_TAG':
      let item = {
        id: 'tag-' + nextTagId++,
        name: action.value,
        searchId: action.searchId
      }
      return item;
    default:
      return state
  }
}

const tags = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TAG':
      let hits = state.filter(item => {
        return item.searchId === action.searchId}
      );
      if(hits.length)
        return state;

      return [
        ...state,
        tag(undefined, action)
      ]
    case 'REMOVE_TAG':
      return state.filter(item => {
        return !(item.id === action.id || item.searchId == action.id)
      })
    case 'REMOVE_TAGS':
      return []
    default:
      return state
  }
}

export default tags
