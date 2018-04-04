import React from 'react';

const styles = {
	container: {
		display: 'flex', alignItems: 'center', margin: '10px 0px',border: '1px solid #ccc',borderRadius: '4px', height: '50px'
	},
	circle: {
		margin: '10px',display:'flex',fontWeight: '500',height: "30px",width: "30px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: "#6bada7", color: 'white'
	}

}

const Member = ({}) => (
	<div style={styles.container}>
		<div style={styles.circle}>
			<div style={{ fontSize: '14px',color: 'white'}}>SH</div>
		</div>
		<div style={{flex: '1', fontSize: "12px", fontWeight: '700',padding:"10px"}}>
			 Shaun Hutch
		</div>
	</div>
);

export default Member;
