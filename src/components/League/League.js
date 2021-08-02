import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './League.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const League = (props) => {
    const [detail, setDetail] = useState([]);
    const { idLeague, strLeague, strSport } = props.league;

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setDetail(data.leagues[0]))
    }, [idLeague])
    detail && console.log(detail)

    const history = useHistory();
    const showLeagueDetails = idLeague => {
        const url = `league/${idLeague}`;
        history.push(url);
    }

    return (
        <div className="card">
            <img style={{ width: '50%', alignItems: 'center' }} src={detail.strLogo} alt="logo" />
            <p><strong>{strLeague}</strong></p>
            <p>Sports type: {strSport}</p>
            <p>Gender: {detail.strGender}</p>
            <Button  onClick={() => showLeagueDetails(idLeague)}>Explore   <FontAwesomeIcon icon={faArrowRight} /></Button>
        </div>
    );
};

export default League;