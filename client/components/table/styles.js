const styles = {
	container: {
		width: 'calc(100% - 30px)',
		height: 'calc(100% - 30px)',
		padding: '15px'
	},
	header: {
		fontWeight: '700',
		fontSize: '18px',
		padding: '5px',
		color: '#6bada7'
	},
	headerCell: {
		display: 'flex',
		flex: '1',
		alignItems: 'center'
	},
	row: {
		height: '40px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottom: '2px solid #ccc'
	},
	evenRow: {
		background: "#f6f6f6"
	},
	rowContent: {
		fontWeight: '700',
		fontSize: '12px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '5px',
		color: '#585858',
		height: '40px',
		borderBottom: '2px solid #ccc'
	},
}

export default styles
