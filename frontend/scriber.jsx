import React from 'react';

export default class Scriber extends React.Component {
  render() {
    return(
      <div className='main-panel'>
        <span>image</span>
        <p>
          Scriber is an app built to provide fast transcriptions for meetings and interviews. Scriber is built with a Python/Django backend, and a React Native frontend. Scriber interfaces with the IBM Watson Speech-to-Text API for quick transcription, and speaker differentiation.
        </p>
      </div>
    );
  }
}
