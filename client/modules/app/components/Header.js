import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { Power2, TweenLite } from "gsap";

const animation = (node) => {
	TweenLite.fromTo(
								node,
								1,
								{
										scaleX: 0.2,
										scaleY: 0.2,
										opacity: 0,
										y: -100,
								},
								{
										scaleX: 1,
										scaleY: 1,
										opacity: 1,
										y: 0,
										ease: Power2.easeOut
								}
	);
}

export default class Header extends Component {
	componentDidMount(){
		animation(this.title)
	}
componentDidUpdate(){
	animation(this.title)
}
handleLogout(){
  this.props.logout()
}
headerTitle(){
  let path = this.props.title
	if (/home/i.test(this.props.title)){
    path = "home"
  }
  if (/appraisal/i.test(this.props.title)){
    path = "appraisal"
  }
  if (/team/i.test(this.props.title)){
    path = "team"
  }
  if (/users/i.test(this.props.title)){
    path = "admin"
  }

  switch (path) {
                   case "home":
                     return "Home";
                   case "appraisal":
                       return "Appraisal";
                   case "team":
                       return "Your Team";
                   case "admin":
                       return "Administration";
                   case "/president":
                           return "President Administration";


                  }
}
render() {
    const profile = this.props.user
    return (
      <header style={{display: 'flex', background: '#F8FAFB', height: '60px',alignItems: 'center', width: "100%"}}>

        <div style={{paddingLeft: '22px',display: 'flex',flex:'1'}}>

          <div ref={title => this.title = title} style={{fontSize: "24px", fontWeight: '700', color: '#585858' }}>{this.headerTitle()}</div>
        </div>



          <div style={{display: 'flex', fontWeight: '500',fontSize: '20px', alignItems: 'center'}} onClick={this.handleLogout.bind(this)}>
              <div style={{margin: '15px',display:'flex',fontWeight: '500',height: "30px",width: "30px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: '#007681', color: 'white'}}>
                <div style={{ fontSize: '14px',color: 'white'}}>{`${profile.firstName[0].toUpperCase()}${profile.lastName[0].toUpperCase()}`}</div></div>
              <div style={{fontSize: "16px", fontWeight: '500', color: '#585858', marginRight: '15px' }}>{`Hi, ${profile.firstName}`}</div>
              <img style={{marginRight: "20px", height: '12px',width: '12px'}} src="/icons/down.svg"/>
          </div>

      </header>
    )
  }
}
