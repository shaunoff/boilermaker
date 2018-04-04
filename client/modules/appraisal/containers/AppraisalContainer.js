import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import axios from 'axios'

import {
  fetchAppraisal,
  updateAppraisal
} from "../actions"
import Appraisals from '../components/Appraisals'

const getCurrent = (apps) => {
 return !apps.length ? {} : apps.filter(a => a.current === true)[0]
}

class AppraisalContainer extends Component {
  componentDidMount(){
    this.props.fetchAppraisal(this.props.match.params.id)
		//this.props.fetchAppraisals(this.props.user.id)
	}
  render() {
    if(!this.props.appraisal.id){
      return <div>....loading</div>
    }
    return (
      <Appraisals {...this.props}/>
    );
  }
}



function mapStateToProps(state,props){
  return {
    user: state.user,
    appraisal: state.appraisals.currentAppraisal
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchAppraisal, updateAppraisal},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppraisalContainer)
