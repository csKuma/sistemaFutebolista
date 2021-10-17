import React, { useEffect, useState } from "react";
import client from "./cliente";


const ListarSeason =props => {








    const [leagues, setLeague] = useState([])
    useEffect(() => {
        client
            .get("/leagues")
            .then(({ data }) => setLeague(data.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [])

    return (
        <div>{console.log(leagues)}
            {leagues.map((leagues) => (
                <li key={leagues.id}>{leagues.name}/ {leagues.id} /{leagues.abreviation}</li>
            )
            )}

        </div>
    )
}
export default ListarSeason



