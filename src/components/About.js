import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from './ProfileClass'
import ProfileComonent from './Profile'

export const About = () => {
  return (
    <div>
        <h1>About us page</h1>
        <p>
            {" "}
            this t=is the router of about us page
            <ProfileComonent  name={"Vraj Jnagid"}/>
            {/* <Profile name={"Vraj Jnagid"}/> */}
        </p>
    </div>
  )
}
