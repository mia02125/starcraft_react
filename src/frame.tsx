import React from 'react';
import './css/main-page.css';
import UnitFactory from './unitFactory_sub';
import UnitZone from './unitZone';

function App() {
    return (
        <div>
            <input></input>
            <button>출력</button>
            <div className={'main-container'}>
                <UnitFactory />
                <UnitZone />
            </div>
        </div>
    )
}

export default App;
