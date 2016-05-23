import React, { PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'
import { rowSelect } from '../data/data'
import Select from 'react-select-plus'

const Pager = ({ className }) => {

  const getOptions = (values) =>
    values.map(val => ({
      label: val,
      value: val,
    }))

  return (
    <div className={'pager ' + className}>
      <a className="pager-btn" href="#" disabled>First</a>
      <span className="pager-spacer">|</span>
      <a className="pager-btn" href="#" disabled>&#171;</a>
      <span className="pager-spacer">|</span>
      Page
      <input className="pager-input" type="text" defaultValue="1" />
      of 12
      <span className="pager-spacer">|</span>
      <a className="pager-btn" href="#">&#187;</a>
      <span className="pager-spacer">|</span>
      <a className="pager-btn" href="#">Last</a>
      <div className="pager-select">
        <Select
          searchable={false}
          clearable={false}
          options={getOptions(rowSelect)}
          value={rowSelect[0]}
        />
      </div>
    </div>
  )
}

Pager.propTypes = {
}

export default Pager;