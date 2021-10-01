import React from 'react';
import { useRecoilValue } from 'recoil';
import './css/main-page.css';
import { IUnit, unitStateData } from './unitFactory';


export const UnitList = (prop : {Team? : number}) => {
    
    const unitState = useRecoilValue(unitStateData);

    const units = unitState.units.filter(item => {
        return Number(item.TEAM) === prop.Team
    })
    return (
        <div className="main-item2">
            {units.map(unit => {          
                return <UnitListItem unit={unit}/>
            })}
        </div>
    )
}

const UnitListItem = (prop : {unit : IUnit}) => {
    return (
        <div>
            <span>Team : {prop.unit.TEAM} - {prop.unit.NAME} | hp : {prop.unit.HP} | adk : {prop.unit.ATTACK}</span>
        </div>
    )
}
