import React, { PropTypes } from 'react'

const Header = ({}) => {

  return (
    <header className="page-header">
      <h1 className="page-header-logo">Insided</h1>
      <p className="tag-line">in opdracht van <strong>Fubar</strong></p>
      <p className="logged-in-user">Johny Napalm<span className="logged-in-user-messages">5</span></p>
    </header>
  )
}

export default Header;