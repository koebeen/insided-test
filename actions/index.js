let nextSearchId = 0

export const addSearch = (value) => {
  return {
    type: 'ADD_SEARCH',
    id: "search-" + ++nextSearchId,
    value
  }
}
export const deleteSearch = (id) => {
  return {
    type: 'DELETE_SEARCH',
    id
  }
}
export const deleteSearches = () => {
  return {
    type: 'DELETE_SEARCHES'
  }
}
export const updateSearchDate = (date, id) => {
  return {
    type: 'UPDATE_SEARCH_DATE',
    id,
    date
  }
}
export const updateFilter1 = (value, id) => {
  return {
    type: 'UPDATE_FILTER_1',
    id,
    value
  }
}
export const updateFilter2 = (value, id) => {
  return {
    type: 'UPDATE_FILTER_2',
    id,
    value
  }
}

export const toggleUser = (id) => {
  return {
    type: 'TOGGLE_USER',
    id
  }
}
export const toggleAllUsers = (state) => {
  return {
    type: 'TOGGLE_ALL',
    state
  }
}

export const filterUsers = (filter) => {
  return {
    type: 'FILTER_USERS',
    filter
  }
}
export const addTag = (value, searchId) => {
  return {
    type: 'ADD_TAG',
    value,
    searchId
  }
}
export const removeTag = (id) => {
  return {
    type: 'REMOVE_TAG',
    id
  }
}
export const removeTags = () => {
  return {
    type: 'REMOVE_TAGS'
  }
}

export const multiSelectEvent = (open) => {
  return {
    type: 'MULTI_SELECT_EVENT',
    open
  }
}
