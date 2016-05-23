import React, { PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'
import { footerSelect1 } from '../data/data'
import Select from 'react-select-plus'

const Footer = ({ selected }) => {

  const getOptions = (values) =>
    values.map(val => ({
      label: val,
      value: val,
    }))

  return (
    <Row className="footer-row">
      <Col xs={2}>
        <Select
          searchable={false}
          clearable={false}
          options={getOptions(footerSelect1)}
          value=""
          placeholder="Change usergroup"
        />
      </Col>
      <Col xs={2}>
        <Select
          searchable={false}
          clearable={false}
          options={getOptions(footerSelect1)}
          value=""
          placeholder="Add secondary user group"
        />
      </Col>
      <Col xs={2}>
        <Select
          searchable={false}
          clearable={false}
          options={getOptions(footerSelect1)}
          value=""
          placeholder="Permissions"
        />
      </Col>
      <Col xs={1}>
        <button className="btn btn-footer">Apply</button>
      </Col>
      <Col xsOffset={3} xs={1}>
        <div className="btn btn-percentage">{selected.length}</div>
      </Col>
      <Col xs={1}>
        <button className="btn btn-footer">Apply</button>
      </Col>
    </Row>
  )
}

Footer.propTypes = {
    selected: PropTypes.arrayOf(PropTypes.shape({
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
    }).isRequired).isRequired,
}

export default Footer;