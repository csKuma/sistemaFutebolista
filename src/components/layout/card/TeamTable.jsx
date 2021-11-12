import React from "react";
import '../card/TableTeam.css'


const Table = ({ Data }) => {
    return (
        <div className="divTabela">
            <table border="1" title="classificação">
                <tr >
                    <div>
                        <td>{Data.logos.href}</td>
                        <td>{Data.displayName}</td>
                    </div>

                </tr>
            </table>

        </div>
    )

}
export default Table