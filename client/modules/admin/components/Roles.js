import React, { Component } from 'react';
import Radium from 'radium'


const popAnimation = Radium.keyframes({
  '50%': { transform: 'scale(1.2)' }
})
const styles = {
	container: {
		display: 'flex'
	},
  label: {
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
    fontFamily: 'quicksand',
    fontSize: '16px',
		width: "26px",
		height: "26px",
    fontWeight: '500',
    borderRadius: '30px',
    border: '0px',
    color: 'white',
    marginRight: '15px',
    ':hover': {
      animation: 'x 0.8s ease',
      animationName: popAnimation
    },
    ':disabled': {
      background: '#ccc',
      color: "white",
      cursor: "not-allowed"
    }
  },
	inactiveLabel: {
		background: "#ccc",
	},
	activeLabel: {
		background: "#6bada7"
	}
};

const isRole = (user,role) => {
	const {roles} = user
	return roles.filter(userRole => userRole.role === role).length ? true : false
}

class Roles extends Component {
	handleClick = (role) => {
    const {user,updateRole} =this.props
		isRole(user, role) ? updateRole(role, user.id, 'remove') : updateRole(role, user.id, 'add')
  }
	render() {
		const { user } = this.props
		return (
			<div style={styles.container}>
				<div key="user" onClick={()=>this.handleClick('User')} style={{...styles.label, ...(isRole(user, "User") ? styles.activeLabel : styles.inactiveLabel)}}>U</div>
				<div key="manager" onClick={()=>this.handleClick('Manager')} style={{...styles.label, ...(isRole(user, "Manager") ? styles.activeLabel : styles.inactiveLabel)}}>M</div>
				<div key="admin" onClick={()=>this.handleClick('Admin')} style={{...styles.label, ...(isRole(user, "Admin") ? styles.activeLabel : styles.inactiveLabel)}}>A</div>
			</div>
		);
	}

}

export default Radium(Roles);
