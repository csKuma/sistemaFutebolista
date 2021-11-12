import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

// componente responsavel pela exibição das ligas 

const LeagueCard = ({ leagues }) => {
    // esta função recebe como parametro o objeto leagues que foi passado por outro componente 
    return (

        <div className="leagues-card" >

            <div >
                <img src={leagues.logos.light} className="Logo-league_image" alt={leagues.name} />
            </div> {/* exibe o logo da liga, como o logo tinha verção light e dark, foi escolhido a versão light pois a dark apresentou alguns problemas com as imagens*/}

            <div className="leagues-info">
                <span className="league-info_name">
                    <p>nome: <strong>{leagues.name}</strong></p>        {/** exibe o nome da liga */}
                </span>
                <span className="league-info_abbr">
                    abreviation:   <strong>  {leagues.abbr}</strong>    {/* exibe a abreviação da liga */}
                </span>
                <div className="league-info_classificacao">
                    <Link to={`/listarSeason/${leagues.id}`}>ver classificação</Link> 
    
            
                </div> {/* foi feito a passagem do id das ligas para o componente responsavel por receber o id e fazer outro requerimento a api*/}
            </div>
        </div>
    );
};
export default LeagueCard;