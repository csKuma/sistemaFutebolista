import React from "react";
import { useParams } from "react-router";

const LeaguesForm = () => {
    const { id } = useParams();

    return (
        
        <div> form test
            {id && <div>id:{id}</div>}
        </div>

    )
}

export default LeaguesForm;