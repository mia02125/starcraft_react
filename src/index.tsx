import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import Left from './map/Left';
import Right from './map/Right';

ReactDOM.render(
  <RecoilRoot>
    <div className={'main-container'}>
      <Left />
      <Right />
    </div>
  </RecoilRoot>,
  document.getElementById('root')
);

