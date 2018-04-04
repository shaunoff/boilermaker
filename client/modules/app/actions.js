import * as action from './actionTypes';
import axios from 'axios';
import {history} from '../../index.js'

/* ------------    ACTION CREATORS      ------------------ */
const gettingUser = () => ({type: action.GETTING_USER})
const getUser = user => ({type: action.GET_USER, user})
const removeUser = () => ({type: action.REMOVE_USER})


export const fetchUser = () =>
  dispatch => {
    dispatch(gettingUser())
    axios.get('/auth/me')
      .then(res =>
        setTimeout(()=>{
          dispatch(getUser(res.data || {loaded: true}))
        },600)

      )
      .catch(err => console.log(err))
  }


export const auth = (email, password, method) =>
  dispatch => {
    dispatch(gettingUser())
    axios.post(`/auth/${method}`, { email, password })
      .then(res => {
        setTimeout(()=>{
          dispatch(getUser(res.data))
          history.push('/home')
        },600)

      }, authError => { // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({error: authError}))
      })
      .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))
  }


export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then(_ => {
        dispatch(removeUser())
        history.push('/login')
      })
      .catch(err => console.log(err))
