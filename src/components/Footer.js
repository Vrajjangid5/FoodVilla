import React, { useContext } from "react";
import UserContext from "../utils/UserContex";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <footer className="text-center py-4 bg-gray-800 text-white">
      <h4>Made with ❤️ By <span>{user.name}</span></h4>
    </footer>
  );
};

export default Footer;
