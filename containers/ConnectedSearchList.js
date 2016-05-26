import { connect } from 'react-redux'
import SearchList from '../components/SearchList'
import { bindActionCreators } from 'redux'
// import { addSearch, updateFilter1, updateFilter2, updateSearchDate, deleteSearch, multiSelectEvent, addTag, removeTag } as Actions from '../actions'
import * as Actions from '../actions'

const mapStateToProps = (state) => {
  return {
    searches: state.searches,
    ui: state.ui
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    calls: bindActionCreators(Actions, dispatch)
  }
}

const ConnectedSearchList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList)

export default ConnectedSearchList
