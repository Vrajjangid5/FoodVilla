import { createContext } from "react";

const UserContext=createContext({
    user:{
        name:"Vraj Jangid",
        email:"vrajjangid@gmail.com",
    },
});
export default UserContext;