import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import UnitFactory from './unitFactory';
import UnitZone from './unitZone';
import Frame from './frame';
import './css/main-page.css';


ReactDOM.render(
  <RecoilRoot>
    <Frame />
  </RecoilRoot>,
  document.getElementById('root')
);


