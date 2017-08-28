import React from 'react';
import ReactDOM from 'react-dom';
import LeftNav from './leftnav';

class Root extends React.Component {
  render () {
    return(
      <div>
        <LeftNav/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root');
	ReactDOM.render(<Root />, root);
});
