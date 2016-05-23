import { connect } from 'react-redux'
import SearchList from '../components/SearchList'

const mapStateToProps = (state) => {
  return {
    searches: state.searches,
    ui: state.ui
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const ConnectedSearchList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList)

export default ConnectedSearchList
