import React from 'react';
import './Subjects.css';
import Navbar from './Navbar'
import chem from './images/chemistry.jpg'
import phy from './images/phy.jpg'
import et from './images/ee.jpg'
import pds from './images/cs.jpg'
import maths from './images/maths.jpg'
import eng from './images/eng.jpg'
import { Component } from 'react';
class Subjects extends Component {
  gotoparticipant=event=>
  {
    window.location.assign('/participants');
  }
  render(){
  return (
    <div className="Subjects">
    <div><Navbar /></div>
    <div className="cards">
    <div className="card">
    <img src={chem} alt=""  onClick={this.gotoparticipant}/>
    <div className="subinfo"><p>Chemistry</p><p>credit:4.0</p><p>Autumn semester</p>
    </div>
    </div>
    <div className="card">
    <img src={phy} alt="" onClick={this.gotoparticipant} />
    <div className="subinfo"><p>Physics</p><p>credit:4.0</p><p>Autumn semester</p>
    </div>
    </div>
    <div className="card">
    <img src={et} alt="" onClick={this.gotoparticipant} />
    <div className="subinfo"><p>ET</p><p>credit:4.0</p><p>Autumn semester</p>
    </div>
    </div>
    <div className="card">
    <img src={maths} alt="" onClick={this.gotoparticipant}/>
    <div className="subinfo"><p>Maths</p><p>credit:4.0</p><p>Spring semester</p>
    </div>
    </div>
    <div className="card">
    <img src={pds} alt="" onClick={this.gotoparticipant} />
    <div className="subinfo"><p>PDS</p><p>credit:3.0</p><p>Spring semester</p>
    </div>
    </div>
    <div className="card">
    <img src={eng} alt="" onClick={this.gotoparticipant} />
    <div className="subinfo"><p>English</p><p>credit:4.0</p><p>Spring semester</p>
    </div>
    </div>
    </div>
    </div>
  );
  }
}

export default Subjects;