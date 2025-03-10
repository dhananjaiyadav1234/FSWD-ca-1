import React from 'react'
import '../App.css'

function TeamMemberCard({data}) {
    const filtered = data.filter(item=>item.office == "Microsoft")
  return (
    <div className='container'>
        {data.map((item,i)=>(
        <div className='card' key = {i}>
            <p>{item.name}</p>
            <p>{item.jobTitle}</p>
            <p>{item.office}</p>

            </div>


        ))}




    </div>
    
  )
}

export default TeamMemberCard
