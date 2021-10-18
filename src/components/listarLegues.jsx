
import React, { useEffect, useState } from "react";
import Api from "../api";
import LeagueCard from "./layout/card/LeagueCard";


export default function ListarLeagues() {
    const [search, setSearch] = useState('')
    const [leagues, setLeague] = useState([])


        const item = {


        }

    useEffect(() => {
        Api
            .get("/leagues")
            .then(({ data }) => setLeague(data.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [search])

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
