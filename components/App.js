import React from 'react'
import ConnectedSearchList from '../containers/ConnectedSearchList'
import ConnectedTagList from '../containers/ConnectedTagList'
import ConnectedUserList from '../containers/ConnectedUserList'
import Header from './Header'
import 'style!css!postcss!sass!./app.scss'

const App = () => (
  <div className="app">
    <Header />
    <div className="container-fluid">
      <ConnectedSearchList />
      <ConnectedTagList />
      <ConnectedUserList />
    </div>
  </div>
)

export default App
