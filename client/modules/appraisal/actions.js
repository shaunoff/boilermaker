import * as action from './actionTypes';
import axios from 'axios';
import {history} from '../../index.js'

/* ------------    ACTION CREATORS      ------------------ */
// const gettingUser = () => ({type: action.GETTING_USER})
const getAppraisal = appraisal => ({type: action.GET_APPRAISAL, appraisal})

// const removeUser = () => ({type: action.REMOVE_USER})
//
//
export const fetchAppraisal = (id) => dispatch => {
    axios.get(`/api/appraisal/${id}`)
      .then(res => {
        console.log(res.data)
				dispatch(getAppraisal(res.data))
			})
      .catch(err => console.log(err))
  }



export const updateAppraisal = (props) => dispatch => {
	 axios.put(`/api/appraisal/${props.appraisalId}`, props)
	   .then(res => {
			 console.log(res.data)
			 dispatch(getAppraisal(res.data))
		 })
	   .catch(err => console.error('Some Error', err));
	};
