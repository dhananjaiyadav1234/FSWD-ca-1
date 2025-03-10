import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import teams from './data'
import TeamMemberCard from './components/TeamMemberCard'

function App() {
  return (
    <BrowserRouter>

    <Routes>

      <Route path ='/' element = {<TeamMemberCard data = {teams}/>}/>


    </Routes>
    
    </BrowserRouter>
  )
}

export default App
