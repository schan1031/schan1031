import React from 'react';
import { Link } from 'react-router-dom';

export default class LeftNav extends React.Component {

  render() {
    return (
      <div className='nav'>
        <img className='portrait' src='./assets/square.png' height='150' width='150'/>
        <h2>Spencer Chan</h2>
        <ul className='navList'>
            <li>
              <Link to='/flock'>
                Flocking Simulation
              </Link>
            </li>
          <li>DraftRoyale</li>
          <li>Scriber</li>
          <li>About Me</li>
        </ul>
      </div>
    );
  }
}

// <Link to='/flock'>
//   Flocking Simulation
// </Link>
