import React, { PropTypes } from 'react'
import Footer from './Footer'
import Pager from './Pager'
import { toggleUser, filterUsers, toggleAllUsers } from '../actions'

const UserList = ({ users, dispatch }) => {

  const checkboxClick = (e) => {
    dispatch(toggleUser(e.target.value))
  }
  const toggleAll = (e) => {
    dispatch(toggleAllUsers(e.target.checked))
  }

  const toggleHeader = (e) => {
    e.preventDefault();
    dispatch(filterUsers(e.target.innerText.toLowerCase()))
  }

  return (
    <div className="panel results">
      <Pager className="pager-top" />
      <table className="table-bordered">
        <thead>
          <tr>
          {users.headers.map(val => {
            if (val.text === 'Username')
              return (
                <th key={val.id} className="th-username">
                <input className="cb" type="checkbox" name="users" value="all-users" onClick={toggleAll}/>
                <a href="#" className={val.cssClass} onClick={toggleHeader}>{val.text}</a>
              </th>
              )
            else
              return (
                <th key={val.id}><a href="#" className={val.cssClass} onClick={toggleHeader}>{val.text}</a></th>
              )

          })}
          </tr>
        </thead>
        <tbody>
          {users.list.map(val =>
            <tr key={val.id}>
              <td className="td-username">
                <input onClick={checkboxClick} className="cb" type="checkbox" name="users" value={val.id} checked={val.selected}/>
                <img className="img-user" src={require('./img/users/' + val.img)} alt={val.username} />
                {val.username}
              </td>
              <td>{val.comments}</td>
              <td>{val.topics}</td>
              <td>{val.usergroup}</td>
              <td>{val['registration date']}</td>
              <td>{val['last login']}</td>
              <td>{val['last comment']}</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className={'results-footer ' + (users.selected.length ? '' : 'hide') }>
        <Footer selected={users.selected} />
      </div>
      <Pager className="pager-bottom" />
    </div>
  )
}

const userArrayProps = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  topics: PropTypes.number.isRequired,
  usergroup: PropTypes.string.isRequired,
  'registration date': PropTypes.string.isRequired,
  'last login': PropTypes.string.isRequired,
  'last comment': PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
}).isRequired).isRequired

UserList.propTypes = {
  users: PropTypes.shape({
    list: userArrayProps,
    selected: userArrayProps
  }).isRequired,
  dispatch: PropTypes.func.isRequired
}

export default UserList
