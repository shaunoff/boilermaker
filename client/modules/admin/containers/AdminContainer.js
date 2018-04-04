import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import AdminTable from '../components/AdminTable'
import Tabs from '../../../components/tabs/Tabs'
import Teams from '../components/Teams'

import {
  fetchUsers,
  updateRole
} from "../actions"

class AdminContainer extends Component {
  componentDidMount(){
    this.props.fetchUsers()
  }
  render() {
    const {users, height, width, updateRole} = this.props
    return (
      <div style={{height: height- 60, width: width -160, margin: '10px'}}>
        <Tabs>
          <Tabs.TabList>
            <Tabs.Tab title="hello"/>
            <Tabs.Tab title="goodbye"/>
            <Tabs.Tab title="fgdfdg"/>
            <Tabs.Tab title="fdfsdfd"/>
          </Tabs.TabList>
          <Tabs.TabPanel>
            <Tabs.Panel>
              <AdminTable users={users} updateRole={updateRole}/>
            </Tabs.Panel>
            <Tabs.Panel>
              <Teams users={users} />
            </Tabs.Panel>
          </Tabs.TabPanel>
        </Tabs>
      </div>
    );
  }
}

const sortByName = (users) => {
  return users.sort((a,b)=> a.lastName < b.lastName ? -1 : 1)
}

function mapStateToProps(state,props){
  return {
    users: sortByName(state.users)
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchUsers,updateRole},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)
