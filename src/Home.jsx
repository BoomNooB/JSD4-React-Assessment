import Layout from "./Layout"
import { useEffect, useState } from "react"
import Admin from "./Admin"
import User from "./User"

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]


//in Home-Normal have 3 part w/o navbar
//first is h1 with text
//second is 2 button 1 for admin 1 for user
const Home = () => {
  const [db, setDb] = useState(mockEmployees)
  const [sector, setSector] = useState("")
  const [pageSector, setPageSector] = useState("React - Assessment")

  const setRights = (position) =>{
    setSector(position)
    // console.log(sector)
  } 

  const pushDB = (newDb) => {
    let prevDb = db;
    // prevDb.push(newDb)
    prevDb = [...prevDb, newDb]
    setDb(prevDb)
    console.log(db)
  }

  const checkRights = () => {
    if (sector === "admin") {
      return (
        <div>
          <Admin db={db} pushDB ={pushDB} stateDB={setDb} />
        </div>
      )
    } else if (sector === "user") {
      return <User db={db} />
    } else {
      return <h1>Please selector your sector</h1>
    }
  }


  return (
    <Layout>
      <div>
        <h1>Boom <br></br>{pageSector}</h1>
        <button onClick={() => {
          setPageSector("Home - User Sector")
          setRights('user')}}>User Home Sector</button>
        <button onClick={() => {
          setRights('admin')
          setPageSector("Home - Admin Sector")}}>Admin Home Sector</button>
        <br></br>
        {checkRights()}
      </div>
    </Layout>
    
  )
}



export default Home
