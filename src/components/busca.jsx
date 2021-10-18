import React, { useEffect, useState } from "react";
import Api from "../api";
import LeagueCard from "../components/layout/card/LeagueCard"


const Busca = () => {
    const [leagues, setLeague] = useState('')
    const [search, setSearch] = useState('')

    const league={};
    if(search){
        league.name=search
    }
    useEffect(() => {
        Api
            .get(`/leagues`)
            .then(({ data }) => setLeague(data.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [search])

    return (
        <div>
            <input type="text" className="league-input" placeholder="buscar" value={search}
                onChange={(ev) => setSearch(ev.target.value)} />

        </div>
    )
}
export default Busca;