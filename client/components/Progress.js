import React, {Component} from 'react';
import HourGlass from './animations/HourGlass.js'
import Click from './animations/Click.js'
import utils from './progressUtilities.js'

const renderIcon = (stage,num,icon) => {
	if (stage === num){
		return icon === "hour" ? <HourGlass size="30px"/> : <Click size="30px"/>
	}
	else if(stage < num){
		return <div><div>{num}</div><img style={{position: 'absolute',left: '20px',top: "20px",width: '15px'}} src="/icons/padlock.svg"/></div>
	}
	return <img style={{width: '12px'}} src="/icons/checked2.svg"/>
}

export default class Progress extends Component {
	static Stage = ({vertical,index, stage,count, num, title, line, icon}) => {
		if(vertical){
			return (
				<React.Fragment>
					{index === 0 ? <div style={utils.verticalEnd}></div> : <div style={utils.lineStyle(stage, num,vertical)}></div>}
          <div style={utils.circleStyle(stage, num)}>{renderIcon(stage, num, icon)}</div>
          <div style={{...utils.subtitle,...utils.subtitleActive}}>{title}</div>
					{index === count-1 ? <div style={utils.verticalEnd}></div> : <div style={utils.lineStyle(stage, num,vertical)}></div>}
				</React.Fragment>
			)
		}
		return (
			<div key={num} style={utils.section}>
				<div style={utils.subSection}>
					{index === 0 ? <div style={utils.lineEnd}></div> : <div style={utils.lineStyle(stage, num)}></div>}
					<div style={utils.circleStyle(stage, num)}>{renderIcon(stage, num, icon)}</div>
					{index === count-1 ? <div style={utils.lineEnd}></div> : <div style={utils.lineStyle(stage, num)}></div>}
				</div>
				<div style={{...utils.subtitle,...utils.subtitleActive}}>{title}</div>
			</div>
		)
	}
  render(){
		const {stage} = this.props
		const {vertical} = this.props
		const children = React.Children.map(this.props.children, (child,index) => {
			return React.cloneElement(child, {stage, count: React.Children.count(this.props.children),index,vertical})
		})
    return(
	    <div style={vertical ? utils.verticalContainer : utils.container}>
				{children}
	    </div>
    )
  }
}
