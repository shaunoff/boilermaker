import React, { Component } from 'react';
import Progress from './Progress'




class Stepper extends Component {

	render() {
		const {stage} = this.props
		const children = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {stage, handleClick: this.handleClick})
		})
		return (
			<div style={{width: '100%',flex: 1, height: "100%", display: 'flex'}}>
				{children}
			</div>
		);
	}

}

export default Stepper;
