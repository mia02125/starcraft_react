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
    NAME : string 
    HP : number
    ATTACK : number
    TEAM? : string
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

    const unitCreater = (name : string, hp : number, attack : number, teamNum : string, id? : number) => {
        const state : IUnitState =   {
            units : [...unitState.units, {idx : id ?? IdGenerate.new(unitState.units.length), NAME : name, HP : hp, ATTACK : attack, TEAM : teamNum  }]
        }
        setUnitState(state)
    }
    
    return (
        <div className="main-item1">
            <h1>팩토리 {prop.Team}</h1>
            <br/>
            <button onClick={() => unitCreater('마린', 100, 15, String(prop.Team))}>마린</button>
            &nbsp;
            <span>마린 ( 체력 : 100 | 공격력 : 15 )</span>
            <br/>
            <button onClick={() => unitCreater('파이어뱃', 150, 20, String(prop.Team))}>파이어뱃</button>
            &nbsp;
            <span>파이어뱃 ( 체력 : 150 | 공격력 : 20 )</span>
            <br/>
            <button onClick={() => unitCreater('뮤탈', 200, 12, String(prop.Team))}>뮤탈</button>
            &nbsp;
            <span>뮤탈 ( 체력 : 200 | 공격력 : 8 )</span>
        </div>
    )
}