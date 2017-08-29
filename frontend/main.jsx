import React from 'react';
import ReactDOM from 'react-dom';
import LeftNav from './leftnav';
import { HashRouter, Route } from 'react-router-dom';
import Flock from './flock';

class Root extends React.Component {
  render () {
    return(
      <div>
        <HashRouter>
          <div className='main'>
            <LeftNav/>
            <Route path='/flock' component={Flock} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root');
	ReactDOM.render(<Root />, root);
});
