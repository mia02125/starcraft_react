import React, { useState } from 'react';
import './css/main-page.css';
import { UnitList } from './unitZone';
import { Factory } from './unitFactory';

function App() {
    
    const [ factory, setFactory ] = useState<JSX.Element[]>([]);
    const [ zone, setZone ] = useState<JSX.Element[]>([]);

    const handlerAdd = () => {
        setFactory([...factory, <Factory  num={factory.length+1}/>])
        // unitZone 추가 기능 
        setZone([...zone, <UnitList />])
    }

    return (

        <div className={'main-container'}>
            
            <button onClick={() =>handlerAdd()}>추가</button>
            
            {factory.map(item => {
                return item
            })}
            {zone.map(item => {
                return item
            })}
        </div>
    )
}

export default App;
