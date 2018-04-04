import React, { Component } from 'react';
import {HOC} from 'formsy-react';
import Radium from 'radium'


class Comment extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      comment: ''
    }


  }

  render(){
    const styles={
      box: {
        resize: 'none',
        fontFamily: 'quicksand',
        minHeight: "60px",
        padding: '5px',
        fontSize: '14px',
        fontWeight: '500',
        background: this.props.disabled ? "#eee" :"white",
        color: this.props.disabled ? "#888" :"#585858",
        flex: 1,
        border: '2px solid #ccc',
        borderRadius: '4px',
        marginLeft: '10px',
        marginTop: '0px',
        marginRight: '10px',
        ':focus': {
          border: '2px solid #6bada7',
          outline: '0',
          boxShadow: '0 0 5px #6bada7'
        },
      }
    }
    return (
      <textarea
        style={styles.box}
        placeholder={this.props.placeholder}
        value={this.props.value}
        name={this.props.name}
        type="text"
        disabled={this.props.disabled}
        rows={this.props.rows}
        onFocus={this.props.onFocus}
        onChange={(e) => this.props.handleUpdate(this.props.name, e.target.value)}
      />
  )
  }
}
export default Radium(Comment);
