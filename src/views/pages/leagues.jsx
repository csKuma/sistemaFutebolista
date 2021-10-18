
import React, {useEffect,useState} from "react";
import ListarLeagues from "../../components/listarLegues";
import UiConteiner from "../../components/ui/container/container";

import './league.css'
import Api from "../../api";


const Leagues = () => {
    const[leagues,setLeague]=useState('')
    const[search,setSearch]=useState('')

    const params={};
    if(search){
        params.name=search
    }

    useEffect(() => {
        Api
            .get("/leagues",{params})
            .then(({ data }) => setLeague(data.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [search])

    return (
        <div className="Leagues">
            
       <header className="league-header">
                <h3>
                    <h1><strong>SISTEMA fUTEBOLISTICO</strong></h1>
                </h3>
            </header>

            <UiConteiner>
            
                <ListarLeagues />
            </UiConteiner>
        </div>
    )
}
export default Leagues



