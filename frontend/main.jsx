import React from 'react';
import ReactDOM from 'react-dom';
import LeftNav from './leftnav';
import { HashRouter, Route } from 'react-router-dom';
import Flock from './flock';
import Draft from './draft';


class Root extends React.Component {
  render () {
    return(
      <div>
        <HashRouter>
          <div className='main'>
            <LeftNav/>
            <Route path='/flock' component={Flock} />
            <Route path='/draft' component={Draft} />
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
