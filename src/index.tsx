import React from 'react';
import ReactDOM from 'react-dom';
import Left from './map/Left';
import Right from './map/Right';

ReactDOM.render(
  <React.StrictMode>
    <div className={'main-container'}>
      <Left />
      <Right />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

