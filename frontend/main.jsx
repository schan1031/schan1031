import React from 'react';
import ReactDOM from 'react-dom';
import LeftNav from './leftnav';
import { HashRouter, Route } from 'react-router-dom';
import Flock from './flock';
import Draft from './draft';
import Scriber from './scriber';
import About from './about';

class Root extends React.Component {
  render () {
    return(
      <div>
        <HashRouter>
          <div className='main'>
            <LeftNav/>
            <Route path='/flock' component={Flock} />
            <Route path='/draft' component={Draft} />
            <Route path='/scriber' component={Scriber} />
            <Route path='/about' component={About} />
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
