
import React, { useEffect, useState } from "react";
import Api from "../api";

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
        <div>{console.log(leagues)}
            {leagues.map((leagues) => (
                <li key={leagues.id}>{leagues.name} {leagues.id}
                    <img src={leagues.logos.dark} /> </li>
            )
            )}

        </div>
    )
}
