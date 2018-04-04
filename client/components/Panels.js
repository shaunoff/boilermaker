import React, { Component } from 'react';

const renderPanel = ({stage, index, children,num,access,user,appraisal}) => {
	if(num.includes(stage)){
		if(!access){
			return children
		}
		if(access === "user" && appraisal.userId == user.id){
			return children
		}
		return <div>No Access</div>
	}
	return null
}
const style = {
		display: 'flex',
		minHeight: "100%",
		width: "100%",
		display: 'flex'
}
class Panels extends Component {
	static Panel = renderPanel
	render() {
		const {stage} = this.props
		const children = React.Children.map(this.props.children, (child,index) => {
			return React.cloneElement(child, {stage,index})
		})
		return (
			<div style={style}>
				{children}
			</div>

		);
	}
}

export default Panels;
