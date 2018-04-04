import React, { Component } from 'react';
import Assessment from './Assessment'
import Panels from '../../../components/Panels.js'
import Stepper from '../../../components/Stepper.js'



class Appraisals extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stage: 1
		};
	}
	render() {
		const {appraisal,user,width,height} = this.props
		if(!appraisal.id){
			return <div>loading</div>
		}
		return (
			<div>
				<div style={{width: width - 170, display: 'flex', position: 'absolute', height: height-90}}>
					<Stepper stage={appraisal.stage}>
						<Panels>
							<Panels.Panel num={[1,2,3]} access="user" user={user} appraisal={appraisal}>
								<Assessment updateAppraisal={this.props.updateAppraisal} appraisal={appraisal} stage={appraisal.stage} user={user}/>
							</Panels.Panel>
							<Panels.Panel num={[4,5,6]} access="manager" user={user}>
								<Assessment manager updateAppraisal={this.props.updateAppraisal} appraisal={appraisal} stage={appraisal.stage} user={user}/>
							</Panels.Panel>
						</Panels>
					</Stepper>
				</div>
			</div>
		);
	}

}

export default Appraisals;
