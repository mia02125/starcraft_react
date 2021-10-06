import React, { useState } from 'react';
import './css/main-page.css';
import { UnitList } from './unitZone';
import { Factory } from './unitFactory';

let count : number= 0;

function App() {
    
    const [ zones, setZones ] = useState<number[]>([]);

    const handlerAdd = () => {
        setZones([...zones, count++])
    }

    const Zone = ( props : { zone : any } ) =>{
        return (
            <div>
                <Factory  Team={props.zone}/>
                <UnitList Team={props.zone}/>
            </div>
        )
    }
    return (
        <div className={'main-container'}>
            <div>
            <button onClick={() =>handlerAdd()}>추가</button>
            </div>
            <br />
            <div>
            {zones.map(item => {
                return <Zone zone={item} />
            })}
            </div>
            
        </div>
    )
}


export default App;