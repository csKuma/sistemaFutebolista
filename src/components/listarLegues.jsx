
import React, { useEffect, useState } from "react";
import Api from "../api";
import LeagueCard from "./layout/card/LeagueCard";


export default function ListarLeagues() {
    const [leagues, setLeague] = useState([])

    useEffect(() => {
        Api
            .get("/leagues")
            .then(({ data }) => setLeague(data.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [])

    return (
        <div >
            
            {console.log(leagues)}
            {leagues.map((leagues) => (
                < LeagueCard leagues={leagues} key={leagues.id} />
            )
            )}

        </div>
    )
}
