import * as actions from './actionTypes'

export default function (state = {appraisals: [], currentAppraisal: {}}, action) {
  switch (action.type) {
    case actions.GET_APPRAISAL:
      return {...state, currentAppraisal: action.appraisal}
    case actions.UPDATE_APPRAISAL:
      return {...state, ...action.appraisal}
    default:
      return state
  }
}
