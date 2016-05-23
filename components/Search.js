import React, { PropTypes } from 'react'
import Select from 'react-select-plus'
import { updateSearchDate, updateFilter1, updateFilter2, deleteSearch, addTag, removeTag, multiSelectEvent } from '../actions'

import { Row, Col } from 'react-bootstrap';
import 'style!css!postcss!sass!react-select-plus/scss/default.scss'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'style!css!react-datepicker/dist/react-datepicker.min.css'
import { category, ltgt, baos, options2 } from '../data/data'

const getOptions = (values) =>
  values.map(val => ({
    label: val,
    value: val,
  }))

const getDate = (date) =>
  moment(date, "DD-MM-YYYY")

const Search = ({ dispatch, completed, id, value, ui }) => {
  const handleDateChange = (date, more, evenmore) => {
      if(date && date !== '')
        dispatch(updateSearchDate(date.format('DD-MM-YYYY'), id))
  }
  const handleFilter1Change = (item) => {
    dispatch(updateFilter1(item.value, id))
    dispatch(addTag(item.value, id))

  }
  const handleFilter2Change = (items) => {
    let value = '';
    if(items.length) {
      value = items.map((item) => {
        return item.value;
      }).join(',')
    } else {
      value = items.value;
    }
    dispatch(updateFilter2(value, id))
  }
  const showIf = (type) => {
    return value.filter1 === type ? '' : 'hidden'
  }

  const toolbar = document.querySelector('.toolbar')

  /* multi select uncheck all functionality */
  const onOpen = () => {
    dispatch(multiSelectEvent(true));
  }
  const hideToolbar = () => {
    dispatch(multiSelectEvent(false))
  }
  const onClose = () => {
    setTimeout(
      hideToolbar, 10
    )
  }
  const deleteButtonClick = () => {
    dispatch(deleteSearch(id))
    dispatch(removeTag(id))
  }
  const checkAll = (e) => {
    e.preventDefault()
    let options = [];
    options2.filter(function(item) {
      if(item.options){
        options = options.concat(item.options)
      }
    });
    handleFilter2Change(options)
  }
  const uncheckAll = (e) => {
    e.preventDefault()
    handleFilter2Change('')
  }
  const showToolBar = (toggle) => {
    return toggle ? '' : 'hidden';
  }
  return (
    <Row className="row">
      <Col xs={3}>
        <Select
          searchable={false}
          clearable={false}
          onChange={handleFilter1Change}
          options={getOptions(category)}
          value={value.filter1}
        />
      </Col>
      <Col xs={3} className={showIf('Comments')}>
        <Select
          searchable={false}
          clearable={false}
          onChange={handleFilter2Change}
          options={getOptions(ltgt)}
          value={value.filter2}
        />
      </Col>
      <Col xs={3} className={showIf('Registration Date')}>
        <Select
          searchable={false}
          clearable={false}
          onChange={handleFilter2Change}
          options={getOptions(baos)}
          value={value.filter2}
        />
      </Col>
      <Col xs={3} className={showIf('Usergroup')}>
        <Select
          className="multi-select"
          searchable={false}
          clearable={false}
          onChange={handleFilter2Change}
          onOpen={onOpen}
          onClose={onClose}
          multi
          hasSelectAll
          options={options2}
          value={value.filter2}
          placeholder="select one or more options"
        />
        <div className={'toolbar ' + showToolBar(ui.multiSelectOpen)}>
          <div className="toolbar-inner">
            <a href="#" onClick={checkAll} className="toolbar-check-all">Check all</a>
            <a href="#" onClick={uncheckAll} className="toolbar-uncheck-all">Uncheck all</a>
          </div>
        </div>
      </Col>
      <Col xs={3} className={showIf('Registration Date')}>
        <DatePicker
          className="form-control date-picker"
          onChange={handleDateChange}
          dateFormat="DD-MM-YYYY"
          selected={value.filter3 ? getDate(value.filter3) : null}
          placeholder="Select date"
        />
      </Col>
      <Col xs={1}>
          <button onClick={deleteButtonClick} className="btn btn-danger">x</button>
      </Col>
    </Row>
)}

Search.propTypes = {
  dispatch: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  value: PropTypes.shape({
    filter1: PropTypes.string.isRequired,
    filter2: PropTypes.string.isRequired,
    filter3: PropTypes.string.isRequired
  }).isRequired
}

export default Search
