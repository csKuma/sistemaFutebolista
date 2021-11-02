
import React, { useEffect, useState } from "react";
import Api from "../api";
import LeagueCard from "./layout/card/LeagueCard";

//// componente responsavel pro fazer a comunicação com  a API do git 


export default function ListarLeagues() {
    const [leagues, setLeague] = useState([])// declarei dois estados league e setLeague,

    useEffect(() => {
        Api
            .get("/leagues") // endpoint leagues que contem {nome, id, e logos das ligas}
            .then(({ data }) => setLeague(data.data)) 
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [])

    return ( // é chamada o componente league card atravez de uma teg e nela é passada como parametro a propia variavel league 
            // usando como chave o id das ligas evitando o erro de key.
        <div >

            {console.log(leagues)}
            {leagues.map((leagues) => (
                < LeagueCard leagues={leagues} key={leagues.id} /> 
            )
            )}

        </div>
    )
}
