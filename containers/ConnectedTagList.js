import { connect } from 'react-redux'
import TagList from '../components/TagList'

const mapStateToProps = (state) => {
  return {
    tags: state.tags
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const ConnectedTagList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TagList)

export default ConnectedTagList
