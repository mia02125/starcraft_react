import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import Left from './Left';
import Right from './map/Right';

ReactDOM.render(
  <RecoilRoot>
    <div className={'main-container'}>
    
      <Right />
    </div>
  </RecoilRoot>,
  document.getElementById('root')
);

