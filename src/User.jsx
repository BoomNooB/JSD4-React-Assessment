import { useContext , useEffect, useState} from "react"

const User = ({db}) => {
    return (
        <div>        
        <table>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Position</th>
            </tr>
        {db.map(item => 
            <tr>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.position}</td>
            </tr>
        )}
        </table>
        </div>
    )
}

export default User