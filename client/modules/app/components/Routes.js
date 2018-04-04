import React, { Component } from 'react';
import {withRouter, Link, Route, Switch, Router, Redirect} from 'react-router-dom'
import { Power2, TweenLite } from "gsap";
// Transitiongroup instead of CssTransitiongroup
import {TransitionGroup, CSSTransition,Transition} from "react-transition-group";
import Dashboard from './dashboard/DashBoard'

import Appraisals from '../../appraisal/containers/AppraisalContainer'
import AdminContainer from '../../admin/containers/AdminContainer'




class Routes extends Component {
		entering(node){
			TweenLite.fromTo(
		                node,
		                1,
		                {
		                    scaleX: 0.9,
		                    scaleY: 0.9,
		                    opacity: 0,
												cx: 500,
		                },
		                {
		                    scaleX: 1,
		                    scaleY: 1,
		                    opacity: 1,
												cx: 0,
		                    ease: Power2.easeOut,

		                }
		  ).delay(0.4);
		}
		exiting(node){
			TweenLite.to(node, 0.6, {
                opacity: 0,
                onComplete: console.log('hgdfhdgfj')
            });
		}
    render() {
        return (
					<Route render={({ location }) => (
						<TransitionGroup>
							<Transition
								appear={true}
								key={location.key}
								classNames="fade"
								timeout={300}
								onEntering={this.entering}
								onExiting={this.exiting}
							>
								{(state) => (
									<Switch location={location}>
										{/* Routes placed here are available to all visitors */}
										<Route path="/home" render={()=><Dashboard {...this.props}/>} />
										<Route path={`/appraisal/:id`} render={({match})=><Appraisals match={match} height={this.props.height} width={this.props.width}/>} />
										<Route path={`/admin`} render={()=><AdminContainer height={this.props.height} width={this.props.width}/>} />
									</Switch>
								)}

							</Transition>
						</TransitionGroup>
			)}/>
        );
    }
}
export default Routes;
