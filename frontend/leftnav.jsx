import React from 'react';
import { Link } from 'react-router-dom';

export default class LeftNav extends React.Component {

  render() {
    return (
      <div className='nav'>
        <img className='portrait' src='./assets/square.png' height='150' width='150'/>
        <h2>Spencer Chan</h2>
        <ul className='navList'>
          <Link to='/flock'>
            <li className='nav-item'>
              Flocking Simulation
            </li>
          </Link>
          <Link to='/draft'>
            <li className='nav-item'>
              DraftRoyale
            </li>
          </Link>
          <Link to='/scriber'>
            <li className='nav-item'>
              Scriber
            </li>
          </Link>
          <Link to='/about'>
            <li className='nav-item'>
              About Me
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

// <Link to='/flock'>
//   Flocking Simulation
// </Link>
