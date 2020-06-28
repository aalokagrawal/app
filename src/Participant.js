import React from 'react';
import './Participant.css';

class Participant extends React.Component {
  deleteit=event=>{
    const a= this.props.name;
    const b="  has been removed";
    const c=a+b;
    alert( c);
    
  }
  render(){
  return (
    <div className="row">
    <div className="col-1-of-3">{this.props.name}</div>
    <div className="col-1-of-3">{this.props.rollno}</div>
    <div className="col-1-of-3"><button onClick={this.deleteit} >DELETE</button></div>
    </div>
  
    
  );
  };
}

export default Participant;