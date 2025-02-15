import React from 'react'

export default function OppurtunityCard({oppurtunity}) {
    const {profile_name, company_name, locations, duration, stipend, start_date} = oppurtunity
  return (
    <div>
        <h1>{profile_name}</h1>
        <p><strong>Company Name : </strong> {company_name}</p>
        <p><strong>Stipend : </strong> {stipend.salary}</p>
        <p><strong>Location : </strong> {locations.length > 0 ? locations.map(item=>item.string).join(", "):"Remote"}</p>
        <p><strong>Duration : </strong> {duration}</p>
        <p><strong>Start Date : </strong> {start_date}</p>
        <button>Apply Here</button>
    </div>
  )
}
