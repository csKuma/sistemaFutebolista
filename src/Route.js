import React from "react";
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Leagues from "./views/pages/leagues";
import LeaguesForm from "./views/pages/LeaguesForm";


const Root = ()=>{
    return(
        <Router>
            <Switch>
                <Route path="/league/:id" component={LeaguesForm}/>
                <Route path="/form" component={LeaguesForm}/>
                <Route path="/" component={Leagues} />
            </Switch>
        </Router>
    )
}
export default Root;