import * as action from './actionTypes';
import axios from 'axios';
import {history} from '../../index.js'

/* ------------    ACTION CREATORS      ------------------ */
// const gettingUser = () => ({type: action.GETTING_USER})
const getUsers = users => ({type: action.GET_USERS, users})

// const removeUser = () => ({type: action.REMOVE_USER})
//
//
export const fetchUsers = () => dispatch => {
    axios.get(`/api/users/`)
      .then(res => {
				dispatch(getUsers(res.data))
			})
      .catch(err => console.log(err))
  }

  export const updateRole = (role, id, type) => dispatch => {
      axios.post(`/api/users/role/${id}`,{role,type})
        .then(res => {
  				dispatch(getUsers(res.data))
  			})
        .catch(err => console.log(err))
    }


// export const updateAppraisal = (props) => dispatch => {
// 	 axios.put(`/api/appraisal/${props.appraisalId}`, props)
// 	   .then(res => {
// 			 console.log(res.data)
// 			 dispatch(getAppraisal(res.data))
// 		 })
// 	   .catch(err => console.error('Some Error', err));
// 	};
