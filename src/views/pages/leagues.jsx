
import React, { useEffect, useState } from "react";
import Api from "../../api";
import ListarLeagues from "../../components/listarLegues";

const Leagues = () => {
    const LeaguesInfo = {
        "id": "arg.1",
        "name": "Argentine Liga Profesional de Fútbol",
        "slug": "argentine-liga-profesional-de-futbol",
        "abbr": "Prim A",
        "logos": {
            "light": "https://a.espncdn.com/i/leaguelogos/soccer/500/1.png",
            "dark": "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/1.png",
        }

    };

    const [leagues, setLeague] = useState([])
    useEffect(() => {
        Api
            .get("/leagues")
            .then(({ data }) => setLeague(data.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

    }, [])

    console.log(leagues)












    return (
        <div className="App" style={{
            maxWidth: 800,
            margin: '30px auto',
        }}>
            <ListarLeagues></ListarLeagues>

        </div>
    )
}
export default Leagues



