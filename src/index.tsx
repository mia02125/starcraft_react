import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import UnitFactory from './unitFactory';
import UnitZone from './unitZone';
import './css/main-page.css';


ReactDOM.render(
  <RecoilRoot>
    <div className={'main-container'}>
      <UnitFactory />
      <UnitZone />
    </div>
  </RecoilRoot>,
  document.getElementById('root')
);


