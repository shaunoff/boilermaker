import React, { Component } from 'react';
import {withRouter,Route, Switch, Router} from 'react-router-dom'

import createHistory from 'history/createBrowserHistory'
import createMemoryHistory from 'history/createMemoryHistory'

import {Login,Signup} from './Auth'
import Main from './Main'

export const history = process.env.NODE_ENV === 'test' ? createMemoryHistory() : createHistory()

class Routes extends Component {
	constructor(props){
		super(props)
		props.fetchUser()
	}
	render() {
		const {user,isLoggedIn,loading,logout,auth} = this.props
		if(loading){
			return <div>loading</div>
		}

    // if (redirectToReferrer) {
    //   return <Redirect to={from} />;
    // }
		// if(isLoggedIn){
		// 	return <Route render={(props) => <Main {...props} user={user} logout={logout}/>}/>
		// }
		return (
			<Router history={history}>
				<Switch>
					<Route path="/login" render={()=><Login auth={auth}/>} />
					<Route path="/signup" render={()=><Signup auth={auth}/>} />
					{
						isLoggedIn && <Main {...this.props}/>
					}
					<Route render={()=><Login auth={auth}/>} />
				</Switch>
			</Router>

		);
	}

}

export default Routes;
