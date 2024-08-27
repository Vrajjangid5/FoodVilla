import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileComponent from './Profile';  // Make sure this path is correct

export const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>
        This is the router of the about us page.
        <ProfileComponent name={"Vraj Jnagid"} />
        {/* <Profile name={"Vraj Jnagid"} /> */}
      </p>
      <Outlet />
    </div>
  );
};
