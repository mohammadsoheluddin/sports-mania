import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faFlag, faFootballBall, faTransgender } from '@fortawesome/free-solid-svg-icons'
import './LeagueDetail.css';


const LeagueDetail = (props) => {
    const [detail, setDetail] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
            .then(res => res.json())
            .then(data => setDetail(data.leagues[0]))
    }, [id])
    const { strLeague, strSport, strCountry, strGender, dateFirstEvent, strDescriptionEN, strDescriptionFR } = detail;
    return (
        <div className="bg">
            <div>
                <img style={{ filter: 'brightness(80%)' }} width="100%" height="200px" src="/images/gallery-1.png" alt="" />
            </div>
            <div className="logoPosition">
                <img width="200px" height="80px" src={detail.strLogo} alt="logo" />
            </div>

            <div className="container">
                <div className="detail">
                    <div>
                        <div><h2>{strLeague}</h2></div>
                        <div className="detailInfo">
                            <div><FontAwesomeIcon icon={faMapMarker} /></div>
                            <div><strong>Founded: {dateFirstEvent}</strong></div>
                        </div>
                        <div className="detailInfo">
                            <div><FontAwesomeIcon icon={faFlag} /></div>
                            <div><strong>Country: {strCountry}</strong></div>
                        </div>
                        <div className="detailInfo">
                            <div><FontAwesomeIcon icon={faFootballBall} /></div>
                            <div><strong>Sport Type: {strSport}</strong></div>
                        </div>
                        <div className="detailInfo">
                            <div><FontAwesomeIcon icon={faTransgender} /></div>
                            <div><strong>Gender: {strGender}</strong></div>
                        </div>
                    </div>
                    <div className="player">
                        <img width="100%" height="185px" src={strGender === "Male" ? `/images/male.png` : `/images/female.png`} alt={strLeague} />
                    </div>
                </div>

                <div>
                    <p>{strDescriptionEN}</p>
                    <p>{strDescriptionFR}</p>
                </div>

                <div className="media">
                        <div><a href="https://www.facebook.com/profile.php?id=100008395966747"><img src="/images/Facebook.png" alt="" /></a></div>
                        <div><a href="https://twitter.com/MDSOHEL63108381"><img src="/images/Twitter.png" alt="" /></a></div>
                        <div><a href="https://studio.youtube.com/channel/UCkGePLURyCfYwW79WQ3OW_Q/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D"><img src="/images/YouTube.png" alt="" /></a></div>
                </div>
            </div>
        </div>
    );
};

export default LeagueDetail;