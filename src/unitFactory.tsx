import React, { useState } from 'react';
import { atom, useRecoilState } from 'recoil';

import './css/main-page.css';

class IdGenerate { 
    private static id : number = 1;
    public static new(num : number) { 
        if(num < 1) { 
            return IdGenerate.id++;
        } else {
            return ++num;
        }
    }
}

export interface IUnit { 
    idx? : number
    name : string 
    hp : number
    attack : number
    team? : string
    groundAir : string
    doAttact? : (unit: IUnit) => void
}

export interface IUnitState { 
    units : IUnit[]
    selectedATK? : number
    selectedSLD? : number
}


export const unitStateData = atom<IUnitState>({
    key : 'unitState',
    default : {
        units : []
    }
})
/**
 * 유닛 생성기 
 * @param prop 
 * @returns 
 */
export const Factory = (prop : {Team : number}) => {
    
    const [ unitState, setUnitState ] = useRecoilState(unitStateData);

    const unitCreater = (name : string, hp : number, attack : number, teamNum : string, ga : string, id? : number) => {
        const state : IUnitState =   {
            units : [...unitState.units, {idx : id ?? IdGenerate.new(unitState.units.length), name : name, hp : hp, attack : attack, team : teamNum, groundAir : ga }]
        }
        setUnitState(state)
    }
    
    return (
        <div className="main-item1">
            <h1>팩토리 {prop.Team}</h1>
            <br/>
            <button onClick={() => unitCreater('마린', 100, 15, String(prop.Team), 'ground')}>마린</button>
            &nbsp;
            <span>마린 ( 체력 : 100 | 공격력 : 15 )</span>
            <br/>
            <button onClick={() => unitCreater('파이어뱃', 150, 20, String(prop.Team), 'ground')}>파이어뱃</button>
            &nbsp;
            <span>파이어뱃 ( 체력 : 150 | 공격력 : 20 )</span>
            <br/>
            <button onClick={() => unitCreater('뮤탈', 200, 12, String(prop.Team), 'air')}>뮤탈</button>
            &nbsp;
            <span>뮤탈 ( 체력 : 200 | 공격력 : 8 )</span>
        </div>
    )
}