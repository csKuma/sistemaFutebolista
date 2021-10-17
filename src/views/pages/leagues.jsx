
import React from "react";
import LeagueCard from "../../components/layout/card/LeagueCard";


const  Leagues = () => {
    const LeaguesInfo={
        "id": "arg.1",
        "name": "Argentine Liga Profesional de Fútbol",
        "slug": "argentine-liga-profesional-de-futbol",
        "abbr": "Prim A",
        "logos": {
            "light": "https://a.espncdn.com/i/leaguelogos/soccer/500/1.png",
            "dark": "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/1.png",
        }
    
    };











    


    return (
        <div className="App" style={{
            maxWidth: 800,
            margin: '30px auto',
        }}>
            < LeagueCard leagues = {LeaguesInfo} />
            {/*<ListarSeason/>*/}
            {/*<ListarLeagues></ListarLeagues>*/}

        </div>
    )
}
export default Leagues



