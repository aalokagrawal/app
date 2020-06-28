import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {

  gotohome = event =>{
    window.location.assign('/app/');
  }

  gotosubject = event =>{
    window.location.assign('/app/subjects');
  };
  gotoparticipant = event =>{
    window.location.assign('/app/participants');
  }


  render(){
  return (
    <div className="Nav">
    <ul >
    <li onClick={this.gotohome}>Home</li>
    <li onClick={this.gotosubject}>Subjects</li>
    <li onClick={this.gotoparticipant}>Participants </li>
    </ul>
    </div>
  );
  }
}

export default Navbar;