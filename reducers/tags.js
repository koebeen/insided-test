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
    case 'UPDATE_TAG':
      // assuming only the name can change
      return update(state, {
        name: {$set: action.value}
      })
    default:
      return state
  }
}

const tags = (state = [], action) => {
  let tagFound = false;
  switch (action.type) {
    case 'ADD_TAG':
      let state = state.map(item => {
        if(item.searchId === action.searchId) {
          tagFound = true;
          return tag(item, {type: 'UPDATE_TAG', value: action.value})
        }
        return item;
      })
      if(tagFound)
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
