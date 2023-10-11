import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='blank'></div>
            <div className='title'>YAMAUCHI QUEST</div>
            <div className='buttons'>
                <a href='/game' className='button toGame'>やまうちを倒しに行く</a>
                <a href='/rank' className='button rank'>ランキングを見る</a>
            </div>

        </div>

    )
}

export default Home