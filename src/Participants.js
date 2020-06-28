import React from 'react';
import './Participants.css';
import Navbar from './Navbar';
import Participant from './Participant';

function addall(){
    alert("All participants have been added");
}


function Participants() {
  return (
    <div className="Participants">
    <div ><Navbar /></div>
    <div className="participantsinfo">
    <Participant name="Name" rollno="Roll No."></Participant>
    <Participant name="AALOK" rollno="16EE2005"></Participant>
    <Participant name="PRANAV" rollno="16EE1005"></Participant>
    <Participant name="SMARAK" rollno="16EE1030"></Participant>
    <Participant name="MSD" rollno="16EE1002"></Participant>
    <Participant name="YUVRAJ" rollno="16EE1001"></Participant>
    </div>
    <button onClick={addall}>Add All Participants</button>
    </div>
  
    
  );
}

export default Participants;