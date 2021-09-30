import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import Content from './content';
import './css/main-page.css';


ReactDOM.render(
  <RecoilRoot>
    <Content /> 
  </RecoilRoot>,
  document.getElementById('root')
);


