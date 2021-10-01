import React, { useState } from 'react';
import './css/main-page.css';
import { UnitList } from './unitZone';
import { Factory } from './unitFactory';

let count : number= 0;

function App() {
    
    const [ zones, setZones ] = useState<JSX.Element[]>([]);

    const handlerAdd = () => {
        setZones([...zones, 
            <div>
                <Factory  Team={zones.length+1}/>
                <UnitList Team={zones.length+1}/>
            </div>])
    }

    return (

        <div className={'main-container'}>
            <div>
            <button onClick={() =>handlerAdd()}>추가</button>
            </div>
            <br />
            <div>
            {zones.map(item => {
                return item
            })}
            </div>
        </div>
    )
}

export default App;