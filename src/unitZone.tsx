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
            let states : any;
            // 해당 id값이   selectedATK값을 가지고 있다면 selectedSLD값을 갖게 해야한다.
            if(unitState.selectedATK === ( 0 || undefined)) {
                states = {
                    units : [...unitState.units],
                    selectedATK : id,
                    selectedSLD : unitState.selectedSLD
                }
            } else {
                states = {
                    units : [...unitState.units],
                    selectedATK : unitState.selectedATK,
                    selectedSLD : id
                    
                }   
            }
        setUnitState(states);
    }
    // 공격 유닛과 방어 유닛 선택 시 구분색상이 없음 
    return (
        <div onClick={() => onSelected(prop.unit.idx)}>
            <span>Team : {prop.unit.TEAM} - {prop.unit.NAME} | 체력 : {prop.unit.HP} | 공격력 : {prop.unit.ATTACK}</span>
        </div>
    )
}
