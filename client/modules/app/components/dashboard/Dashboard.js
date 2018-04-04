import React, { Component } from 'react';
// import {Doughnut} from 'react-chartjs-2';
import Progress from '../../../../components/Progress.js'

// import HomeProgress2 from '../components/appraisal/HomeProgress2.js'
// import HomePie from '../components/appraisal/HomePie.js'
// import RecentActivity from '../components/appraisal/RecentActivity.js'
// import CompletedAppraisals from '../components/appraisal/CompletedAppraisals.js'
// import { Line, Circle } from 'rc-progress';

const warning = "#fa7606"
const manager = "#6bada7"
const primary = "#007681"

const styles = {
	section: {
		border: "2px solid #ccc", borderRadius: '8px',marginBottom: '10px', background: "white", fontWeight: '700', marginLeft: "10px",
	},
	sectionHeader: {
		fontSize: "18px",
		fontWeight: '700',
		color: '#6bada7',
		padding:"10px",
	}
}

class Home extends Component {
	// componentDidMount(){
	// 	this.props.fetchAppraisals(this.props.user.id)
	// }
	render(){
		const {user} = this.props
		return (
			<div ref={(ref) => {this.wrapper = ref}} style={{position: 'absolute',width: "100%"}}>
	  		<div  style={{display: 'flex',  flexDirection: "column", flexWrap:'wrap', margin: '20px'}}>
	      <div style={{flex: '3', display: 'flex',flexDirection: 'column',minWidth: '90%', ...styles.section}}>
	          <div style={styles.sectionHeader}>
	            Appraisal Progress
	          </div>
	          <div style={{display: 'flex'}}>
	            <div style={{flex: "3",display: 'flex',flexDirection: 'column', justifyContent:'center',marginRight: '20px'}}>

								<Progress user={user}>
									<Progress.Stage num={1} title="Self Assessment" icon="hour"/>
									<Progress.Stage num={2} title="Manger's Assessment" icon="hour"/>
									<Progress.Stage num={3} title="Review & Targets" icon="hour"/>
									<Progress.Stage num={4} title="Finalization" icon="hour"/>
								</Progress>
	            </div>
						</div>
	      </div>
				<div style={{display: 'flex'}}>


	      <div style={{flex: '1',display: 'flex',flexDirection: 'column',...styles.section}}>
	          <div style={styles.sectionHeader}>Recent Activity</div>
						{/* <RecentActivity user={user} notifications={notifications}/> */}
	      </div>
	      <div style={{flex: '1',display: 'flex',flexDirection: 'column',...styles.section}}>
	          <div style={styles.sectionHeader}>Completed Appraisals</div>
						{/* {appraisals.map((appraisal,index)=>{
							return <CompletedAppraisals key={index} user={user} appraisal={appraisal}/>
						})} */}
	      </div>
	      <div style={{flex: '1',display: 'flex',flexDirection: 'column',border: "2px solid #ccc", borderRadius: '8px', marginLeft: '11px', background: "white"}}>
	          <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
	            Useful Links

	          </div>

	          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc', borderRadius: '4px'}}>

	            <div style={{fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
	               <img style={{ width: '40px'}} src="/icons/question.svg"/>
	            </div>
	            <div style={{flex: '2', display: 'flex', flexDirection: "column", fontSize: "14px", fontWeight: '700', color: '#585858',margin:"10px"}}>
	                Instructions
	            </div>
	            <div style={{textAlign: 'center',flex: '1', display: 'flex', flexDirection: "column", fontSize: "14px", fontWeight: '700', background: '#6bada7',color: 'white',margin:"10px",padding: "10px"}}>
	                Download
	            </div>

	          </div>
	          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc', borderRadius: '4px'}}>

	            <div style={{fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
	               <img style={{ width: '30px', marginRight: '10px'}} src="/icons/pdf.svg"/>
	            </div>
	            <div style={{flex: '2', display: 'flex', flexDirection: "column", fontSize: "14px", fontWeight: '700', color: '#585858',margin:"10px"}}>
	                Appraisal Policy
	            </div>
	            <div style={{textAlign: 'center',flex: '1', display: 'flex', flexDirection: "column", fontSize: "14px", fontWeight: '700', background: '#6bada7',color: 'white',margin:"10px",padding: "10px"}}>
	                Download
	            </div>

	          </div>
	          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc', borderRadius: '4px'}}>

	            <div style={{fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
	               <img style={{ width: '30px', marginRight: '10px'}} src="/icons/pdf.svg"/>
	            </div>
	            <div style={{flex: '2', display: 'flex', flexDirection: "column", fontSize: "14px", fontWeight: '700', color: '#585858',margin:"10px"}}>
	                Staff Handbook
	            </div>
	            <div style={{textAlign: 'center',flex: '1', display: 'flex', flexDirection: "column", fontSize: "14px", fontWeight: '700', background: '#6bada7',color: 'white',margin:"10px",padding: "10px"}}>
	                Download
	            </div>

	          </div>





	      </div>
			</div>
	  </div>
	</div>
		)
	}


}

export default Home;
