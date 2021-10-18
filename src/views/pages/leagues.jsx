
import React from "react";
import ListarLeagues from "../../components/listarLegues";
import UiConteiner from "../../components/ui/container/container"
import './league.css'



const Leagues = () => {

    return (
        <div className="Leagues">
<UiConteiner>
            <header className="league-header">
                
                    <h1>
                        <strong>SISTEMA FUTEBOLISTICO</strong>
                    </h1>
                
            </header>
            </UiConteiner>
            <UiConteiner>
                <ListarLeagues />
            </UiConteiner>
        </div>
    )
}
export default Leagues



