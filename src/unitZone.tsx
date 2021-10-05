import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
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
    
    const [ unitState , setUnitState ] = useRecoilState(unitStateData);

    const onSelected = (id? : number) => { 
            // 해당 id값이   selectedATK값을 가지고 있다면 selectedSLD값을 갖게 해야한다.
            const states = {
                units : [...unitState.units],
                selectedATK : id
            }
        
        setUnitState(states);
    }

    const selectedData = () => {
        if(unitState.selectedATK != undefined) {
            return 'selectedATK';
        } else { 
            return 'selectedSLD';
        }
    }

    return (
        <div className={ prop.unit.idx === ( unitState.selectedATK || unitState.selectedSLD ) ? selectedData() : ''} onClick={() => onSelected(prop.unit.idx)}>
            <span>Team : {prop.unit.TEAM} - {prop.unit.NAME} | hp : {prop.unit.HP} | adk : {prop.unit.ATTACK}</span>
        </div>
    )
}
