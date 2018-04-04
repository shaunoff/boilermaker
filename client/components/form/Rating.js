import React, { Component } from 'react';
import Radium from 'radium'


class Rating extends React.Component {

  ratingChange(data){
    console.log(this.props.rating)
    if(this.props.disabled === false){
      this.props.handleUpdate(this.props.name, data)
    }
  }
  render(){
    const popAnimation = Radium.keyframes({
      '50%': { transform: 'scale(1.4)' }
    })
    const styles={
      normal: {
        marginLeft: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: this.props.size ? this.props.size : '20px',
        height: this.props.size ? this.props.size : '20px',
        borderRadius: this.props.size ? this.props.size : '20px',
        border: '2px solid #ccc',
        background: "#ccc",
        marginRight: '8px',
        zIndex: '3',
        cursor: this.props.disabled ? 'not-allowed' : 'pointer',
        ':hover': {
          animation: 'x 0.8s ease',
          animationName: popAnimation
        },
      },
      scored: {
        border: this.props.disabled ? '2px solid #6bada7' : '2px solid #007681',
        background: this.props.disabled ? "#6bada7" : "#007681",
      },
      number: {
        color: "white",
        fontSize: '16px',
        fontWeight: '700'
      }

    }

    return (
      <div style={{display: 'flex',height: "50px"}}>
        <div key="1" onClick={this.ratingChange.bind(this,1)} style={[styles.normal, this.props.rating >= 1 && styles.scored]}>
          <div style={styles.number}>1</div>
        </div>
        <div key="2" onClick={this.ratingChange.bind(this,2)} style={[styles.normal, this.props.rating >= 2 && styles.scored]}>
          <div style={styles.number}>2</div>
        </div>
        <div key="3" onClick={this.ratingChange.bind(this,3)} style={[styles.normal, this.props.rating >= 3 && styles.scored]}>
          <div style={styles.number}>3</div>
        </div>
        <div key="4" onClick={this.ratingChange.bind(this,4)} style={[styles.normal, this.props.rating >= 4 && styles.scored]}>
          <div style={styles.number}>4</div>
        </div>
        <div key="5" onClick={this.ratingChange.bind(this,5)} style={[styles.normal, this.props.rating >= 5 && styles.scored]}>
          <div style={styles.number}>5</div>
        </div>
    </div>
  )
  }
}
export default Radium(Rating);
