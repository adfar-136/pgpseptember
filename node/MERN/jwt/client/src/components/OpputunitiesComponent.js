import React from 'react'
import oppurtunitiesData from "../oppurtunities.json"
import OppurtunityCard from './OppurtunityCard'
export default function OpputunitiesComponent() {
  return (
    <div>
        <h1>Internship oppurtunities</h1>
        <div>
            {Object.values(oppurtunitiesData.internships_meta).map((oppurtunity, index) =>(
                <OppurtunityCard  key={oppurtunity.id} oppurtunity = {oppurtunity}/>
            ))}
        </div>
    </div>
  )
}
