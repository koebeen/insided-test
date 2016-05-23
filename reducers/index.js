import { combineReducers } from 'redux'
import searches from './searches'
import users from './users'
import tags from './tags'
import ui from './ui'

const searchApp = combineReducers({
  searches,
  users,
  tags,
  ui
})

export default searchApp
