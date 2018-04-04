import React from 'react';

const styles = {
	container: {
		display: 'flex', flexDirection: 'column', alignItems: 'center',
	},
	circle: {
		margin: '10px',display:'flex',fontWeight: '500',height: "30px",width: "30px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: "#6bada7", color: 'white'
	}

}

const Manager = ({title}) => (
	<div style={styles.container}>
		<div style={{fontSize: "18px",fontWeight: '700',color: '#6bada7'}}>
			Team Name
		</div>
		<div style={{fontSize: "16px", fontWeight: '700',padding:"10px",color: 'rgb(88,88,88'}}>
			John Picklesimer
		</div>
	</div>
);

export default Manager;
