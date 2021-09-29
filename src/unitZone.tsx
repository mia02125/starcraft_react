import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import './css/main-page.css';
import { unit, unitStateData } from './unitFactory';


const UnitList = () => {
    const unitState = useRecoilValue(unitStateData);
    return (
        <div className="main-item3">
            {unitState.units.map(unit => {
                return <UnitListItem unit={unit}/>
            })}
        </div>
    )
}

const UnitListItem = (prop : {unit : unit}) => {

    const [ unitState, setUnitState ] = useRecoilState(unitStateData);

    const selectedUnitId = (id : number) => {
        setUnitState(prev => {return {...prev, selectedUnitId : id}});
    }

    return (
        <div className={unitState.selectedUnitId === prop.unit.id ? 'selected': ''} onClick={() => selectedUnitId(prop.unit.id || 0)}>
            <span>{prop.unit.NAME} | hp : {prop.unit.HP} | adk : {prop.unit.ADK}</span>
        </div>
    )
}


function App() {
    return (
        <UnitList />
    )
}

export default App;
