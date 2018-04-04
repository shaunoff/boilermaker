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
			stage: this.props.manager ? 7 : 4
		}
		this.props.updateAppraisal(submitData)
	}
	render(){
	  return(
			<div style={style}>
				<Form manager={this.props.manager} onSubmit={(data)=>this.handleSubmit(data)}  data={this.props.appraisal} title="Self-Assessment: Summary">
					<Form.Question
						fieldName="summary"
						title="Summary"
						question="How well have you performed over the last year?"
						rows={20}
					/>
				</Form>
			</div>

	  )
	}
}
