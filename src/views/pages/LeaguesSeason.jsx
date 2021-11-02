import axios from "axios";
import React, { useState, useEffect, } from "react";
import { useParams } from "react-router";
import UiConteiner from "../../components/ui/container/container";
import "../pages/LeagueS.css"

// este componente é responsavel por receber o id e passar como parametro no endpoint para fazer outro requerimento

const LeaguesSeason = () => {
  const { id } = useParams();
  const [idleeague, setIdleague] = useState([])
  

  useEffect(() => {

    axios.get(`https://api-football-standings.azharimm.site/leagues/${id}/standings
      `)
      // esta é uma das formas de passar o endpoint 
      .then(({data}) => setIdleague(data.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [id])

  return (
    <div className="season-info">

      <UiConteiner>
        <div className="print">
          
          <div className="print-info">
            <div>
            nome: {idleeague.name}
          </div>
          <div>
            season: {idleeague.season}
          </div>
          </div>
          
          <div className="mensagem"> desculpa, não foi possivel exibir a lista dos times
        
          </div>
          

        </div>

      </UiConteiner>

    </div>
  )
}

export default LeaguesSeason