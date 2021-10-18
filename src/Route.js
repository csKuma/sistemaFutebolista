import React from "react";
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Leagues from "./views/pages/leagues";
import LeaguesSeason from "./views/pages/LeaguesSeason.jsx";



const Root = ()=>{
    return(
        <Router>
            <Switch>
                <Route path="/listarSeason/:id" component={LeaguesSeason}/>
                <Route path="/" component={Leagues} />
            </Switch>
        </Router>
    )
}
export default Root;