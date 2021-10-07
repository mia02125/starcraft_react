import React, { useState } from 'react';
import './css/main-page.css';
import { UnitList } from './unitZone';
import { Factory, unitStateData } from './unitFactory';
import { Detail } from './unitDetail';
import { useRecoilValue } from 'recoil';

let count : number= 1;

function App() {
    
    const [ zones, setZones ] = useState<number[]>([]);
    const unitState = useRecoilValue(unitStateData);
    /**
     * 진영 추가 
     */
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
            <button onClick={() =>handlerAdd()}>팩토리 추가</button>
            </div>
            <br />
            <div>
            {zones.map(item => {
                return <Zone zone={item} />
            })}
            </div>
            <Detail ATKId={unitState.selectedATK} SLDId={unitState.selectedSLD} />
        </div>
    )
}


export default App;