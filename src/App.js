import React, { Fragment } from 'react';
import './App.css';
import { bindActionCreators } from 'redux'
import * as actionCreators from './actions/actionCreators'
import { connect } from 'react-redux'
import Main from './components/Main/Main'

export const mapStateToProps = state => ({

})

export const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

const App = props => {
  return (
      <Fragment>
      <Main {...props} />
      </Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

