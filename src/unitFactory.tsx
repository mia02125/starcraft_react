import React from 'react';
import { atom } from 'recoil';
import './css/main-page.css';

const unit = atom<

const UnitCreater = () => {


    
    return (
        <div className="main-item1">
            <h1>팩토리</h1>
            <button>마린</button>
                &nbsp;&nbsp;
            <button>파이어뱃</button>
                &nbsp;&nbsp;
            <button>뮤탈</button>
            <br/>
            <span>마린 ( HP : 100,  APK : 15)</span>
            <br/>
            <span>파이어뱃 ( HP : 150,  APK : 20)</span>
            <br/>
            <span>뮤탈 ( HP : 200,  APK : 8)</span>
        </div>
    )
}

function App() {
 return (
        <UnitCreater/>
 )
}

export default App;
