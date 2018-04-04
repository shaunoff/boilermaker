import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link, Route, Switch, Router, Redirect} from 'react-router-dom'
import {Login,Signup} from './Auth'
import Sidebar from './Sidebar'
import Header from './Header'
import Routes from './Routes'

class Main extends Component {
  constructor(){
    super()
    this.state={
      width: 0,
      height: 0
    }
  }
  componentDidMount(){
    this.setState({
      width:window.innerWidth,
      height:window.innerHeight,
    })
    window.addEventListener('resize', ()=>{
      this.setState({
        width:window.innerWidth,
        height:window.innerHeight,
      })
    })
  }
  render() {
    const path = this.props.location.pathname


    if (path === "/") {
      return <Redirect to={"/home"} />;
    }
    const { isLoggedIn,user,logout } = this.props
    return (
      <div style={{display:'-webkit-flex',display: 'flex', width: `${this.state.width - 2}px`, height: this.state.height,background: '#F8FAFB'}}>
        <Sidebar user={user} path={this.props.match.path}/>
        <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
          <Header user={user} title={path} logout={logout}/>
          <div style={{position: 'relative',display: "flex", flex: '1'}}>
            <Routes {...this.props} height={this.state.height} width={this.state.width}/>
            {/* <Switch>

      				<Route path="/home" render={()=><div>hfjgkdjfghkjdf</div>} />
      			</Switch> */}
            {/* <ReactTransitionGroup>
              {React.cloneElement(this.props.children, {key: path, user: this.props.currentUser, notifications: this.props.notifications, appraisals: this.props.currentUserAppraisals})}
            </ReactTransitionGroup> */}
          </div>
        </div>

      </div>

    );
  }

}

// export default Main;
// const Main = (props) => {
//   const {children, handleClick, isLoggedIn} = props
//
//   return (
//     <div>
//       <nav>
//         {
//           isLoggedIn
//             ? <div>
//               {/* The navbar will show these links after you log in */}
//               <Link to="/home">Home</Link>
//               <a href="#" onClick={handleClick}>Logout</a>
//             </div>
//             : <div>
//               {/* The navbar will show these links before you log in */}
//               <Link to="/login">Login</Link>
//               <Link to="/signup">Sign Up</Link>
//             </div>
//         }
//       </nav>
//       <hr />
//       {children}
//     </div>
//   )
// }

/**
 * CONTAINER
 */


// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Main)

/**
 * PROP TYPES
 */
Main.propTypes = {
  isLoggedIn: PropTypes.bool
}
