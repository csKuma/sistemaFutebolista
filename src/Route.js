import React from "react";
import {BrowserRouter as Router ,Route,Switch, Link} from 'react-router-dom'
import Leagues from "./views/pages/leagues";


const Root = ()=>{
    return(
        <Router>
            <Switch>
                <Route path="/" component={Leagues} />
            </Switch>
        </Router>
    )
}
export default Root;