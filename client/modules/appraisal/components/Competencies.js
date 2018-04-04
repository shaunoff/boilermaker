import React from 'react';

import Form from '../../../components/form/Form'


const style = {
	display: 'flex',
	overflow: 'scroll',
	minHeight: "693px",
	minWidth: "870px",
	height: '100%',
	overflow: 'hidden',
	flexDirection: 'column',
	margin: '15px',
	width: "100%",
	display: 'flex',
	border: "2px solid #ccc",
	borderRadius: '8px',
	background: "white"
}
export default class Competencies extends React.Component {
	handleSubmit(data){
		const submitData = {
			appraisalId: this.props.appraisal.id,
			userId: this.props.user.id,
			...data,
			stage: this.props.manager ? 5 : 2
		}
		this.props.updateAppraisal(submitData)
	}
	render(){
	  return(
			<div style={style}>
				<Form manager={this.props.manager} onSubmit={(data)=>this.handleSubmit(data)}  data={this.props.appraisal} title="Self-Assessment: Competencies">
					<Form.Question
						fieldName="comm"
						title="1. Communication"
						question="Ability to explain, convince and be understood in oral and written communications with employees and clients at all levels. Also, consider evidence of an understanding of people's views and the effect of own actions on others."
					/>
					<Form.Question
						fieldName="coop"
						title="2. Cooperation"
						question="Ability to demonstrate a spirit of willingness and interest when working with superior(s), co-workers and clients."
					/>
					<Form.Question
						fieldName="judge"
						title="3. Judgement and Initiative"
						question="Ability to identify and appropriately solve or refer problems. Willingness to expand responsibilities."
					/>
					<Form.Question
						fieldName="time"
						title="4. Time Management"
						question="Ability to organize time effectively. Also consider ability to set priorities, anticipate problems, estimate time requirements and meet deadlines."
					/>
				</Form>
			</div>
	  )
	}
}
