import { useEffect, useState } from "react";

const useOnline=()=>{
    const [isOnline ,setisOnline]=useState(true);
    useEffect(()=>{
        const handleOnline=()=>{
            setisOnline(true);
         }
         window.addEventListener("online",handleOnline);
         const handleOffline=()=>{
            setisOnline(false);
         }
         window.addEventListener("offline",handleOffline);

         return()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
         }
    },[]);
    return isOnline;
};
export default useOnline;