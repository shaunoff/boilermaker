import * as actions from './actionTypes'

const defaultUser = {
}

export default function (state = defaultUser, action) {
  switch (action.type) {
    case actions.GETTING_USER:
      return {loading: true}
    case actions.GET_USER:
      return {...action.user, loading: false}
    case actions.REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
