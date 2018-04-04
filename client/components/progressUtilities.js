const data = [
	{
		num: 1,
		title: "Self Assessment",
		line: 'start',
		icon: 'click'
	},
	{
		num: 2,
		title: "Manager Assessment",
		icon: 'hour'
	},
	{
		num: 3,
		title: "Review & Targets",
		icon: 'click'
	},
	{
		num: 4,
		title: "Finalization",
		line: 'end',
		icon: 'hour'
	}
]

export const styles={
	container: {
		display: 'flex'
	},
	verticalContainer: {
		display: 'flex',
		margin: '15px 0px 15px 15px',
		flexDirection: 'column',
		alignItems: 'center',
		height: '100%',
		background: 'white',
		border: "2px solid #ccc",
		borderRadius: '8px',
	},

	section: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1',

	},
	subSection: {
		display: 'flex',
		alignItems: 'center',
		flex: '1',
		height: '40px'
	},
	circle: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#ccc',
		width: '30px',
		height: '30px',
		background:'white',
		borderRadius: '40px',
		border: '3px solid #ccc',
		zIndex: '3',
		position: 'relative'
	},
	circleActive: {
		width: '50px',
		height: '50px',
		border: '3px solid #ccc',
	},
	circleComplete: {
		border: '3px solid #6bada7',
	},
	subtitle:{
		textAlign: 'center',
		fontWeight: '700',
		margin: '10px 5px',
		color: "#ccc"

	},
	subtitleActive:{
		color: "#6bada7"

	},
	subtitleComplete:{
		color: "#6bada7"

	},
	line:{
		flex: '1',
		background: 'rgb(204, 204, 204)',
		height: '3px'

	},
	verticalLine: {
		flex: '1',
		background: 'rgb(204, 204, 204)',
		width: '3px',
		height: '40px'
	},

	lineEnd:{
		flex: '1',
		background: 'white',
		height: '4px'
	},
	verticalEnd: {
		background: 'white',
		height: '25px'
	},
	lineActive :{
		background: '#ccc',
	},
	lineComplete :{
		background: '#6bada7',
	},
}
export const circleStyle = (current, circleSection) => {
	if (current === circleSection){
		return {
			...styles.circle,
			...styles.circleActive
		}
	}
	if (current > circleSection){
		return {
			...styles.circle,
			...styles.circleComplete
		}
	}
	return styles.circle
}
export const titleStyle = (current, subtitleSection) => {

	if (current >= subtitleSection){
		return {
			...styles.subtitle,
			...styles.subtitleActive
		}
	}
	return styles.subtitle
}
export const lineStyle = (current, lineSection, vertical) => {
	if (vertical){
		if (current === lineSection){
			return {
				...styles.verticalLine,
				...styles.lineActive
			}
		}
		if (current > lineSection){
			return {
				...styles.verticalLine,
				...styles.lineComplete
			}
		}
		return styles.verticalLine
	}
	else {
		if (current === lineSection){
			return {
				...styles.line,
				...styles.lineActive
			}
		}
		if (current > lineSection){
			return {
				...styles.line,
				...styles.lineComplete
			}
		}
		return styles.line
	}

}

export default {
  ...styles,
	data,
	lineStyle,
	circleStyle,
	titleStyle
}
