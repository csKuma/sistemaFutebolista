import React from "react";
import "./Card.css";
const LeagueCard = ({ leagues }) => {
    return (
        <div className="leagues-card">
            <img src={leagues.logos.dark} className="Logo-league_image" />
            <div className="leagues-info">
                <span className="league-info_name">
                    <p>nome: <strong>{leagues.name}</strong></p>
                </span>
                <span className="league-info_abbr">
                    abreviation:   <strong>  {leagues.abbr}</strong>
                </span>
                <span className="league-info_classificacao">
                    <a href="">ver classificação</a>

                </span>

            </div>
        </div>
    );
};
export default LeagueCard;