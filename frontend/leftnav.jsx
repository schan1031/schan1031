import React from 'react';

export default class LeftNav extends React.Component {

  render() {
    return (
      <div className='nav'>
        <img className='portrait' src='./assets/square.png' height='150' width='150'/>
        <h2>Spencer Chan</h2>
        <ul className='navList'>
          <li>Flocking Simulation</li>
          <li>DraftRoyale</li>
          <li>Scriber</li>
          <li>About Me</li>
        </ul>
      </div>
    );
  }
}
