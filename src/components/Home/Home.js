import React from 'react';
import styles from './Home.module.css'
import { useEffect } from 'react';
import { useState } from 'react';
import League from '../League/League';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
            .then(res => res.json())
            .then(data => { setLeagues(data.leagues) })
    }, [])
    return (
        <div className={styles.bg}>
            <div><img style={{ filter: 'brightness(40%)' }} width="100%" height="200px" src="/images/gallery-1.png" alt="" /></div>
            <div className={styles.headingPosition}><h1>Sports Mania</h1></div>
            <div className={styles.container}>
                {
                    leagues.length && leagues.slice(1, 16).map(league => <League key={league.idLeague} league={league}></League>)
                }
            </div>
        </div>

    );
};

export default Home;