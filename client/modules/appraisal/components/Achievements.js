import React from 'react';

import Form from '../../../components/form/Form'

const style = {
	display: 'flex',
	overflow: 'scroll',
	minHeight: "100%",
	flexDirection: 'column',
	margin: '15px',
	width: "100%",
	display: 'flex',
	border: "2px solid #ccc",
	borderRadius: '8px',
	background: "white"
}

export default class Achievements extends React.Component {
	handleSubmit(data){
		const submitData = {
			appraisalId: this.props.appraisal.id,
			userId: this.props.user.id,
			...data,
			stage: this.props.manager ?  6 : 3
		}
		this.props.updateAppraisal(submitData)
	}
	render(){
	  return(
			<div style={style}>
				<Form manager={this.props.manager} onSubmit={(data)=>this.handleSubmit(data)}  data={this.props.appraisal} title="Self-Assessment: Achievements">
					<Form.Question
						fieldName="accomp"
						title="1. Accomplishments"
						question="How would you rate the accomplishments achieved over the last year? Describe the biggest contributing factors to that rating"
					/>
					{/* <Form.Question
						fieldName="brand"
						title="2. Brand Promotion/Business Development"
						question="What have you done to improve the P3I brand and generate extra business"
					/> */}
					<Form.Question
						fieldName="devel"
						title="3. Professional Development"
						question="What level of professional development has been achieved this year? Describe the steps taken."
					/>
					<Form.Question
						fieldName="goals"
						title="4. Professional Goals"
						question="How well did you accomplish your goals this year? Describe how you achieved them."
					/>
				</Form>
			</div>
	  )
	}
}
