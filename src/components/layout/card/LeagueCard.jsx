import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const LeagueCard = ({ leagues }) => {
    return (
        <div className="leagues-card" >

            <div >
                <img src={leagues.logos.light} className="Logo-league_image" alt={leagues.name} />
            </div>

            <div className="leagues-info">
                <span className="league-info_name">
                    <p>nome: <strong>{leagues.name}</strong></p>
                </span>
                <span className="league-info_abbr">
                    abreviation:   <strong>  {leagues.abbr}</strong>
                </span>
                <div className="league-info_classificacao">
                   <Link to={`/listarSeason/${leagues.id}`}>ver classificação</Link>
                </div>
            </div>
        </div>
    );
};
export default LeagueCard;