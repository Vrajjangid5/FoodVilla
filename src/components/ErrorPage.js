import React from 'react'
import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
     
    const err=useRouteError();
    console.log(err);


  return (
    <div>
        <h1>
            opppss!!!! something went wronge
        </h1>
        <h2>{err.status +" : "+err.statusText
        }</h2>
    </div>
  )
}
