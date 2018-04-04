import React, { Component } from 'react';
import RenderQuestion from './Question'
import Button from '../Button'

const styles = {
	wrapper: {
		display: 'flex',
		width: '100%',
		height: "100%",
		flexDirection: 'column',
		display: 'flex',
		background: "white"
	}
}
class Form extends Component {
	constructor(props) {
		super(props);
		this.state = props.data
		this.handleUpdate = this.handleUpdate.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	static Question = RenderQuestion
	handleUpdate(name, data){
		this.setState({
			[name]: data
		})
	}
	handleSubmit(){
		this.props.onSubmit(this.state)
	}
	render() {
		console.log('form state',this.state)
		const children = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {handleUpdate: this.handleUpdate, manager: this.props.manager, data: this.state})
		})
		return (
			<div style={styles.wrapper}>
				<div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          {this.props.title}
        </div>
				{children}
				<div style={{display: 'flex', justifyContent: 'flex-end'}}>
					<Button click={this.handleSubmit}>Submit</Button>
				</div>
			</div>
		);
	}

}

export default Form;
