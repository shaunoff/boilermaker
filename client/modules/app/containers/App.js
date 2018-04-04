import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import axios from 'axios'

import {
  auth,
  fetchUser,
  logout
} from "../actions"

// import {
//   fetchAppraisals
// } from "../../appraisal/actions"

import AuthRoutes from '../components/AuthRoutes'

function mapStateToProps(state,props){
  return {
    isLoggedIn: !!state.user.id,
    loading: !!state.user.loading,
    user: state.user
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchUser,auth,logout},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthRoutes)


// const mapState = (state) => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id
//   }
// }
//
// const mapDispatch = (dispatch) => {
//   return {
//     loadInitialData () {
//       dispatch(me())
//     }
//   }
// }
