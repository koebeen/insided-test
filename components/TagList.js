import React, { PropTypes } from 'react'
import { removeTag, removeTags, deleteSearch, deleteSearches } from '../actions'

const TagList = ({ tags, dispatch }) => {
  const remove = (searchId, tagId) => {
    dispatch(deleteSearch(searchId))
    dispatch(removeTag(tagId))
  }
  const removeAll = () => {
    dispatch(removeTags())
    dispatch(deleteSearches())
  }
  const showIf = () => {
    return tags.length > 0 ? '' : 'hide'
  }
  return (
    <div className="panel tags">
      {
        tags.map(tag =>
          <div className="btn tag" key={tag.id} onClick={() => remove(tag.searchId, tag.id)}><span className="remove-tag">x</span> {tag.name}</div>
        )
      }
      <div className={'btn clear-selection ' + showIf()} onClick={removeAll}>Clear selection</div>
    </div>
  )
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    searchId: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  dispatch: PropTypes.func.isRequired
}

export default TagList
