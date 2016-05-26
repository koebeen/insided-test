import React, { PropTypes } from 'react'
import { addSearch } from '../actions'
import Search from './Search'
import { tickBoxValues, userList } from '../data/data'

let cb = 0;

const SearchList = ({ searches, ui, calls }) => {
  const handleClick = () => {
    calls.addSearch();
  }

  return (
    <div className="panel advanced-search">
      <h2 className="advanced-search-header">Advanced search</h2>
        <div className="searches">
          {searches.map(search =>
            <Search
              key={search.id}
              {...search}
              calls={calls}
              ui={ui}
            />
          )}
        </div>
      <div>
        <button onClick={handleClick} className="btn btn-success">Add Row</button>
      </div>
      <div className="cb-container">
        <h2 className="advanced-search-header">Columns</h2>
        <div className="cb-group">
          {tickBoxValues.map(val =>
            <label key={'cb' + cb++} className="cb-label">
              <input className="cb" type="checkbox" name="ticks" value={val} />
              {val}
            </label>
          )}
        </div>
      </div>
    </div>
  )
}

SearchList.propTypes = {
  searches: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.shape({
      filter1: PropTypes.string.isRequired,
      filter2: PropTypes.string.isRequired,
      filter3: PropTypes.string.isRequired
    }).isRequired
  }).isRequired).isRequired,
  ui: PropTypes.object.isRequired,
  calls: PropTypes.object.isRequired
}

export default SearchList
