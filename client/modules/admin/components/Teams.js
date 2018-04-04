import React, { Component } from 'react';
import Card from '../../../components/card/Card'
import Member from './Member'
import Manager from './Manager'
class Teams extends Component {

	render() {
		return (
			<div style={{display: 'flex', margin: '10px', height: "calc(100% - 20px)"}}>
				<Card>
					<Manager/>
					<hr/>
					<Member/>

				</Card>
				<Card>
					Hello
				</Card>
				<Card>
					Hello
				</Card>
				<Card>
					Hello
				</Card>
				<Card>
					Hello
				</Card>
				<Card>
					Hello
				</Card>
			</div>
		);
	}

}

export default Teams;
