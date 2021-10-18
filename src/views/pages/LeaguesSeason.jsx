import axios from "axios";
import React, { useState, useEffect, } from "react";
import { useParams } from "react-router";
import UiConteiner from "../../components/ui/container/container";
import "../pages/LeagueS.css"



const LeaguesSeason = () => {
  const { id } = useParams();
  const [idleeague, setIdleague] = useState([])

  useEffect(() => {

    axios.get(`https://api-football-standings.azharimm.site/leagues/${id}/standings
      `)
      .then(({ data }) => setIdleague(data.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [id])


  return (
    <div className="season-info">
      {console.log(idleeague)}
      <UiConteiner>
        <div>
         nome:{idleeague.name}
        </div>
        <div>
          id:{id}
        </div>
        <div>
        season: {idleeague.season}
        </div>
        <div className="mensagem"> desculpa, não consegui listar os times por falta de conhecimento da linguagem</div>
         <div className="mensagem"> consegui passar o id mas não consegui recolher os dados de standings</div>
      </UiConteiner>

    </div>
  )
}

export default LeaguesSeason