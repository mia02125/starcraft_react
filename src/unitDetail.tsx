import React from 'react';
import { useRecoilState } from 'recoil';
import './css/main-page.css';
import './css/bootstrap/bootstrap.min.css';
import { IUnit, IUnitState, unitStateData } from './unitFactory';


export const Detail = (prop : { ATKId? : number, SLDId? : number}) => {

    let cancelId : IUnitState;
    const [ useState, setUseState ] = useRecoilState(unitStateData);

    let ATKUnit : IUnit | undefined = useState.units.find(item => item.idx === prop.ATKId);
    let SLDUnit : IUnit | undefined = useState.units.find(item => item.idx === prop.SLDId);

    const onAttack = (unit1? : IUnit, unit2? : IUnit) => {
        console.log('공격 : ', unit1)
        console.log('방어 : ', unit2)
    }

    /**
     * 선택 해제 
     */ 
    const onCancel = (gubun : string) => {
        switch(gubun) {
            case 'atk': 
                cancelId  = {
                    units : [...useState.units],
                    selectedATK : undefined, 
                    selectedSLD : useState.selectedSLD
                }
                break;
            case 'sld': 
                cancelId  = {
                    units : [...useState.units],
                    selectedATK : useState.selectedATK, 
                    selectedSLD : undefined
                }
                break;
        }            
        setUseState(cancelId);
    }

    return (
        <div>
            
            {/* 공격 팀 */}
            { ATKUnit !== undefined ? 
                <div className="main-item3">
                    <h2>{ATKUnit?.team || ''} 팀</h2>
                    <span>
                        유닛명 : {ATKUnit?.name}
                        <br/>
                        체력 : {ATKUnit?.hp}
                        <br/>
                        공격력 : {ATKUnit?.attack}
                    </span>
                    <br/>
                    <button onClick={() => onCancel('atk')}>선택 해제</button>
                </div>
                : 
                <div className="main-item3">
                    <h1>공격할 유닛을 지정하세요</h1>
                </div>
            }
            <br />
            <button className="btn btn-success" onClick={() => onAttack(ATKUnit, SLDUnit)}>공격</button>
            <br />
            {/* 방어 팀 */}
            { SLDUnit !== undefined ? 
                <div className="main-item4">
                    <h2>{SLDUnit?.team || ''} 팀</h2>
                    <span>
                        유닛명 : {SLDUnit?.name}
                        <br/>
                        체력 : {SLDUnit?.hp}
                        <br/>
                        공격력 : {SLDUnit?.attack}
                    </span>
                    <br/>
                    <button onClick={() => onCancel('sld')}>선택 해제</button>
                </div>
                : 
                <div className="main-item4">
                    <h1>방어할 유닛을 지정하세요</h1>
                </div>
            }
        </div>
    )
}

