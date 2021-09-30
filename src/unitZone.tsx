import React from 'react';
import { useRecoilValue } from 'recoil';
import './css/main-page.css';
import { unit, unitStateData } from './unitFactory';


export const UnitList = () => {
    
    const unitState = useRecoilValue(unitStateData);
    
    return (
        <div className="main-item2">
            {unitState.units.map(unit => {
                return <UnitListItem unit={unit}/>
            })}
        </div>
    )
}

const UnitListItem = (prop : {unit : unit}) => {
    return (
        <div>
            <span>{prop.unit.NAME} | hp : {prop.unit.HP} | adk : {prop.unit.ATTACK}</span>
        </div>
    )
}
