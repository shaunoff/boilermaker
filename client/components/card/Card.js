import React from 'react';

const styles = {
	container: {
		width: 'calc(100% - 20px)',
		height: 'calc(100% - 20px)',
		padding: '10px',
		background: 'white',
		border: "2px solid #ccc",
		borderRadius: '8px',
		marginRight: '5px',
		marginLeft: '5px'
	},
	sectionHeader: {
		fontSize: "18px",
		fontWeight: '700',
		color: '#6bada7',
	}

}
const Card = (props) => (
	<div style={{...styles.container, ...props.style}}>
		{props.title && (
			<div style={styles.sectionHeader}>
				{props.title}
			</div>
		)}
		{props.children}
	</div>
);

export default Card;
