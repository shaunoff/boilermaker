import * as actions from './actionTypes'

export default function (state = [], action) {
  switch (action.type) {
    case actions.GET_USERS:
      return action.users
    default:
      return state
  }
}
