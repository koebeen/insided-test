import update from 'react/lib/update'
import { userData } from '../data/data';
import moment from 'moment'

const convertDate = (str) => {
  return moment(str, 'DD-MMM-YY HH:mm').format()
}
const getSelected = newList => {
  return newList.filter(item => item.selected === true);
}
const updatedState = (state, newList) => {
  return update(state, {
    list: {$set: newList},
    selected: {$set: getSelected(newList)}
  })
}

const user = (state, action) => {
  let item
  switch (action.type) {
    case 'TOGGLE_USER':
      return update(state, {
        selected: {$apply: val => !val}
      })
    case 'TOGGLE_ALL':
      return update(state, {
        selected: {$set: action.state}
      })
    case 'FILTER_USERS':
      if(state.text.toLowerCase() === action.filter){
        item = update(state, {
          reverse: {$apply: val => !val},
          cssClass: {$apply: val => val === 'table-header-link selected-asc' ? 'table-header-link selected-desc' : 'table-header-link selected-asc'}
        })
        return item
      } else {
        return update(state, {
          reverse: {$set: false},
          cssClass: {$set: 'table-header-link'}
        })
      }
    default:
      return state
  }
}

const users = (state = userData, action) => {
  let newList, newHeaders;
  switch(action.type) {
    case 'TOGGLE_USER':
      newList = state.list.map(item => {
        if (item.id === action.id)
          item = user(item, action)
        return item;
      })
      return updatedState(state, newList)
    case 'TOGGLE_ALL':
      newList = state.list.map(item => {
        return user(item, action);
      })
      return updatedState(state, newList)
    case 'FILTER_USERS':
      if (action.filter) {

        let prop = action.filter;

        let item = state.headers.find((it) => {
          return it.text.toLowerCase() === prop;
        })

        newList = state.list.concat([]).sort( (a, b) => {
          let propA = a[prop], propB = b[prop];
          if(item.type === 'date') {
            propA = convertDate(propA)
            propB = convertDate(propB)
          }
          return propA > propB ? 1 : propA < propB ? -1 : 0
        });

        if(item.reverse){
          newList.reverse()
        }

        newHeaders = state.headers.map((it) => {
          return user(it, action)
        })

        return update(state, {
          list: {$set: newList},
          headers: {$set: newHeaders}
        })
      }
      return state

    default:
      return state
  }
}

export default users
