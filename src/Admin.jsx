import React, { useEffect, useState } from 'react';
const Admin = ({db,pushDB,stateDB}) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [id, setId] = useState(db.length);

  const handleFirstNameChange = (event) => {
        const newFirstName = event.target.value;
        setFirstName(newFirstName);
  }
  const handleLastNameChange = (event) => {
        const newLastName = event.target.value;
        setLastName(newLastName);
  }
  const handlePositionChange = (event) => {
        const newPosition = event.target.value;
        setPosition(newPosition);
  }  


  const name = (firstName, lastName, position) => {
    addId()
    pushDB({id:id, name: firstName, lastname: lastName, position: position})
  }

  const addId = () => {
    let prevID = id;
    prevID++;
    setId(prevID);
    // console.log(id)
  }

  const deleteDB = (id) => {
    console.log(id)
    let prevDb = [...db];
    // let newPrev = prevDb.filter(item => item.id !== id)
    prevDb.splice(id,1)
    // stateDB(newPrev)
    stateDB([...prevDb])
  }
  
  return (
      <>
        <h2>Create User Here</h2>
        <br/>
          <div>
            <input type="text" placeholder="Name" onChange={handleFirstNameChange} style={{margin: '4px'}} />
            <br/>
            <input type="text" placeholder="LastName" onChange={handleLastNameChange} style={{margin: '4px'}} />
            <br/>
            <input type="text" placeholder="Position" onChange={handlePositionChange} style={{margin: '4px'}} />
            <br/>
            <button onClick={() => {
              
              name(firstName, lastName, position)
              }}>Save</button>
            
            <table>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Position</th>
                <th>Delete</th>
            </tr>
              {db.map((item,index) => 
            <tr>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.position}</td>
                <td>
                  <button onClick={() => {
                    deleteDB(index)
                    }}>Delete</button>
                </td>
            </tr>
              )}
        </table>
          </div>
      </>
  )
}

export default Admin