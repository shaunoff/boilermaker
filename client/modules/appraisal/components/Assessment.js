import React, { Component } from 'react';
import Competencies from './Competencies'
import Achievements from './Achievements'
import Summary from './Summary'
import Panels from '../../../components/Panels.js'
import Stepper from '../../../components/Stepper.js'
import Progress from '../../../components/Progress.js'

class Assessment extends Component {
	render() {
		const {user}=this.props
		const {stage} = this.props.user.appraisals.filter(app => app.current)[0]
		return (
			<div style={{width: '100%',display: 'flex'}}>
				<Stepper stage={this.props.stage}>
					<Progress vertical user={user}>
						<Progress.Stage num={this.props.manager ? 4 : 1} title="Competencies" />
						<Progress.Stage num={this.props.manager ? 5 : 2} title="Achievements"/>
						<Progress.Stage num={this.props.manager ? 6 : 3} title="Summary"/>
					</Progress>
					<Panels>
						<Panels.Panel num={this.props.manager ? [4] : [1]}>
							<Competencies  manager={this.props.manager} updateAppraisal={this.props.updateAppraisal} appraisal={this.props.appraisal} user={user} stage={this.props.stage}/>
						</Panels.Panel>
						<Panels.Panel num={this.props.manager ? [5] : [2]}>
							<Achievements  manager={this.props.manager} updateAppraisal={this.props.updateAppraisal} appraisal={this.props.appraisal} user={user} stage={this.props.stage}/>
						</Panels.Panel>
						<Panels.Panel num={this.props.manager ? [6] : [3]}>
							<Summary manager={this.props.manager} updateAppraisal={this.props.updateAppraisal} appraisal={this.props.appraisal} user={user} stage={this.props.stage}/>
						</Panels.Panel>
					</Panels>
				</Stepper>
			</div>
		);
	}

}

export default Assessment;
