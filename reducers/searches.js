import update from 'react/lib/update'
import { initialState } from '../data/data';

const search = (state, action) => {
  switch (action.type) {
    case 'ADD_SEARCH':
      let item = update(initialState[0], {
        id: {$set: action.id}
      });
      return item;
    case 'UPDATE_SEARCH_DATE':
      return update(state, {
        value: {
          filter3: {$set: action.date}
        }
      })
    case 'UPDATE_FILTER_1':
      return update(state, {
        value: {
          filter1: {$set: action.value}
        }
      })
    case 'UPDATE_FILTER_2':
      return update(state, {
        value: {
          filter2: {$set: action.value || ''}
        }
      })
    default:
      return state
  }
}

const searches = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SEARCH':
      return [
        ...state,
        search(undefined, action)
      ]
    case 'DELETE_SEARCH':
      return state.filter(item => {
        return item.id !== action.id
      })
    case 'DELETE_SEARCHES':
      return initialState;
    case 'UPDATE_SEARCH_DATE':
    case 'UPDATE_FILTER_1':
    case 'UPDATE_FILTER_2':
      return state.map(item => {
        if (item.id === action.id)
          item = search(item, action)
        return item;
      })
    case 'TOGGLE_FILTER_2':
      return state;
    default:
      return state
  }
}

export default searches
