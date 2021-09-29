import React from 'react';
import { atom, useRecoilState } from 'recoil';
import './css/main-page.css';

class IdGenerate {
    private static id : number = 1;
    public static new(count : number) {
        if(count < 1) {
            return IdGenerate.id++;
        } else {
            count += 1;
            return count++;
        }
    }
}

export interface unit {
    id? : number
    NAME : string
    HP : number
    ADK : number
}

interface unitState { 
    units : unit[]
    selectedUnitId? : number
}

export const unitStateData = atom<unitState>({
    key : 'units',
    default : {
        units : []
    }
});

const UnitCreater = () => {
    
    const [ unitState, setUnitStatus ] = useRecoilState(unitStateData);

    const btnCreater = (name : string, hp : number, adk : number, id? : number) => {
        const unitData : unitState = {
            units : [...unitState.units, { id : id ?? IdGenerate.new(unitState.units.length), NAME : name, HP : hp, ADK : adk }]
        }
        setUnitStatus(unitData);
    };
    
    return (
        <div className="main-item1">
            <h1>팩토리</h1>
            <br/>
            <button onClick={() => btnCreater('마린', 100, 15)}>마린</button>
            &nbsp;
            <span>마린 ( HP : 100 | APK : 15 )</span>
            <br/>
            <button onClick={() => btnCreater('파이어뱃', 150, 20)}>파이어뱃</button>
            &nbsp;
            <span>파이어뱃 ( HP : 150 | APK : 20 )</span>
            <br/>
            <button onClick={() => btnCreater('뮤탈', 200, 8)}>뮤탈</button>
            &nbsp;
            <span>뮤탈 ( HP : 200 | APK : 8 )</span>
        </div>
    )
}

function App() {
    return (
        <UnitCreater/>
    )
}

export default App;
