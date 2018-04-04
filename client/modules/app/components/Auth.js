import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
// import {auth} from '../store'

/**
 * COMPONENT
 */


class AuthForm extends Component {
	handleSubmit(evt){
		evt.preventDefault()
		const formName = evt.target.name
		const email = evt.target.email.value
		const password = evt.target.password.value
		this.props.auth(email, password, formName)
	}
	render() {
		const {name, displayName, handleSubmit, error, auth} = this.props
		return (
			<div>
	      <form onSubmit={(evt)=>this.handleSubmit(evt)} name={name}>
	        <div>
	          <label htmlFor="email"><small>Email</small></label>
	          <input name="email" type="text" />
	        </div>
	        <div>
	          <label htmlFor="password"><small>Password</small></label>
	          <input name="password" type="password" />
	        </div>
	        <div>
	          <button type="submit">{displayName}</button>
	        </div>
	        {error && error.response && <div> {error.response.data} </div>}
	      </form>
	      <a href="/auth/google">{displayName} with Google</a>
	    </div>
		);
	}
}

export default AuthForm;

// const AuthForm = (props) => {
//   const {name, displayName, handleSubmit, error, } = props
// 	console.log(props)
//   return (
//     <div>
//       <form onSubmit={handleSubmit} name={name}>
//         <div>
//           <label htmlFor="email"><small>Email</small></label>
//           <input name="email" type="text" />
//         </div>
//         <div>
//           <label htmlFor="password"><small>Password</small></label>
//           <input name="password" type="password" />
//         </div>
//         <div>
//           <button type="submit">{displayName}</button>
//         </div>
//         {error && error.response && <div> {error.response.data} </div>}
//       </form>
//       <a href="/auth/google">{displayName} with Google</a>
//     </div>
//   )
// }

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

// const mapDispatch = (dispatch,props) => {
//   return {
//     handleSubmit (evt) {
//       evt.preventDefault()
//       const formName = evt.target.name
//       const email = evt.target.email.value
//       const password = evt.target.password.value
//       dispatch(props.auth(email, password, formName))
//     }
//   }
// }

export const Login = connect(mapLogin)(AuthForm)
export const Signup = connect(mapSignup)(AuthForm)

/**
 * PROP TYPES
 */
// AuthForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   displayName: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   error: PropTypes.object
// }
