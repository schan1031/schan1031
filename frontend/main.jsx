import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {
  render () {
    return(
      <div>
        This is ReacT.
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root');
	ReactDOM.render(<Root />, root);
});
