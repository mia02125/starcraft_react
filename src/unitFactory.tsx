import React, { useState } from 'react';
import { atom, useRecoilState } from 'recoil';

import './css/main-page.css';

class IdGenerate { 
    private static id : number = 0;
    public static new(num : number) { 
        if(num < 1) { 
            return IdGenerate.id++;
        } else {
            return num++;
        }
    }
}

export interface unit { 
    idx? : number
    NAME : string 
    HP : number
    ATTACK : number
    TEAM? : string
}

interface unitState { 
    units : unit[]
    selectedId? : 0
}

export const unitStateData = atom<unitState>({
    key : 'unitState',
    default : {
        units : []
    }
})

export const Factory = (prop : {num : number}) => {
    
    const [ unitState, setUnitState ] = useRecoilState(unitStateData);

    const unitCreater = (name : string, hp : number, attack : number, teamNum : string, id? : number) => {
        const state : unitState =   {
            units : [...unitState.units, {idx : id ?? IdGenerate.new(unitState.units.length), NAME : name, HP : hp, ATTACK : attack, TEAM : teamNum  }]
        }
        setUnitState(state)
    }
    
    return (
        <div className="main-item1">
            <h1>팩토리 {prop.num}</h1>
            <br/>
            <button onClick={() => unitCreater('마린', 100, 15, String(prop.num))}>마린</button>
            &nbsp;
            <span>마린 ( HP : 100 | APK : 15 )</span>
            <br/>
            <button onClick={() => unitCreater('파이어뱃', 150, 20, String(prop.num))}>파이어뱃</button>
            &nbsp;
            <span>파이어뱃 ( HP : 150 | APK : 20 )</span>
            <br/>
            <button onClick={() => unitCreater('뮤탈', 200, 12, String(prop.num))}>뮤탈</button>
            &nbsp;
            <span>뮤탈 ( HP : 200 | APK : 8 )</span>
        </div>
    )
}