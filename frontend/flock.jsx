import React from 'react';

export default class Flock extends React.Component {
  render() {
    return(
      <div className='main-panel animated fadeIn'>
        <h2>Flocking Simulation</h2>
        <a target='_blank' href='https://schan1031.github.io/Flocking-Simulation'>
          <video width='640' autoPlay loop>
            <source src='./assets/flock.webm' type='video/webm'/>
          </video>
        </a>
        <p>
          Flocking is a behavior exhibited by birds in groups in flight. This simulation shows the behavior of flocking, and allows you to tune parameters to see different behavior. The three main factors in flocking are cohesion, alignment and separation . The combination of these three factors forms the pattern we know as flocking.
        </p>
      </div>
    );
  }
}
