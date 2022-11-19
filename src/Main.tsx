import React from 'react';
import Nivo from './statistics/Nivo';
import Recharts from './statistics/Recharts';

const Main = () => {

    return (
    <>
        통계를 만들어 보았습니다 
        <div>Recharts 입니다.</div>
        <Recharts />
        <div>Nivo 입니다.</div>
        <Nivo />
    </>
    
    )
}

export default Main;