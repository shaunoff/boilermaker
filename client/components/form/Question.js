import React, { Component } from 'react';
import Rating from './Rating'
import Comment from './Comment'

class Question extends Component {
	render() {
		return (
			<div style={{display: 'flex', flexDirection: "column"}}>
				<div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
					{this.props.title}: <span style={{color: "#ccc"}}>{this.props.question}</span>
				</div>
				<div style={{display: 'flex'}}>
					<div style={{display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'flex-start'}}>
						<Rating disabled={this.props.manager ? true : false} rating={this.props.data[`${this.props.fieldName}Rating`]} handleUpdate={this.props.handleUpdate} name={`${this.props.fieldName}Rating`}/>
						<Comment disabled={this.props.manager ? true : false} rows={this.props.rows || 4} value={this.props.data[`${this.props.fieldName}Comment`]} handleUpdate={this.props.handleUpdate} name={`${this.props.fieldName}Comment`}/>
					</div>
					{this.props.manager && <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
						<Rating disabled={false} rating={this.props.data[`m${this.props.fieldName}Rating`]} handleUpdate={this.props.handleUpdate} name={`m${this.props.fieldName}Rating`}/>
						<Comment disabled={false} rows={this.props.rows || 4} value={this.props.data[`m${this.props.fieldName}Comment`]} handleUpdate={this.props.handleUpdate} name={`m${this.props.fieldName}Comment`}/>
					</div>}

				</div>
			</div>
		);
	}

}

export default Question;
