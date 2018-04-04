import React from 'react';
import moment from 'moment'
import Table from '../../../components/table/Table'
import Progress from './Progress'
import Roles from './Roles'

const isAdmin = (user) => {
	const {roles} = user
	return roles.filter(role => role.role === "Admin").length ? true : false
}
const AdminTable = ({users,updateRole}) => (
	<Table>
		<Table.Header>
			<Table.HeaderCell>Last Name</Table.HeaderCell>
			<Table.HeaderCell>First Name</Table.HeaderCell>
			<Table.HeaderCell>Appraisal Deadline</Table.HeaderCell>
			<Table.HeaderCell>Progress</Table.HeaderCell>
			<Table.HeaderCell>Manager</Table.HeaderCell>
			<Table.HeaderCell>Roles</Table.HeaderCell>
		</Table.Header>
		<Table.Body>
				{users.map(row => (
					<Table.Row key={row.email}>
						<Table.Cell>{row.firstName}</Table.Cell>
						<Table.Cell>{row.lastName}</Table.Cell>
						<Table.Cell>{moment(row.createdAt).format('MMM Do')}</Table.Cell>
						<Table.Cell><Progress stage={row.appraisals.filter(app => app.current === true)[0].stage}/></Table.Cell>
						<Table.Cell> <Roles user={row} updateRole={updateRole}/></Table.Cell>
						<Table.Cell><div onClick={()=>updateRole('Admin', row.id)}>{isAdmin(row) ? 'admin' : 'not admin'}</div></Table.Cell>
					</Table.Row>
				))}
			<Table.Row/>
			<Table.Row/>
		</Table.Body>
	</Table>
);

export default AdminTable;
