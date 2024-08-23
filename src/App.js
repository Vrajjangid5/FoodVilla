import React from "react";
import  ReactDOM  from "react-dom/client";

import HeaderContent from "./components/HeaderContent";
import Body from "./components/Body";
import { IMG_CDN_URL } from "./contants";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import { About } from "./components/About";
import { ErrorPage } from "./components/ErrorPage";
import { Contact } from "./components/Contact";
import { RestrauntDetails } from "./components/RestrauntDetails";
import { Profile } from "./components/Profile";
 /* //header
            logo
            nav items
            cart
        //Body
        // -search bar
        // -retsorent linst
        //    -restorent card
        //      -image
        //      -name
        //      -rating
        //      - cusines

        footer
            links
            copyright
        */

// const heading1= React.createElement(
//     "h1",{
//         id:"title",
//         key:"h1"
//     },
//     "heading from  parcel 1"
// );





// const heading2= React.createElement(
//     "h2",{
//         id:"title2",
//         key:"h2"
//     },
//     "heading 2"
// );

// const container=React.createElement(
//     "div",
//     {
//         id:"container"
//     },
//     [heading1,heading2]
// );
// console.log(heading1);


// const ChineseWok={
//     name:"Chinese Wok",
//     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/CknPotRic",
//     cusines:["Chinese","Asian"],
//     rating:"4.2"
// }












const AppLayout=()=>{
    return(
       /* //header
            logo
            nav items
            cart
        //Body
        // -search bar
        // -retsorent linst
        //    -restorent card
        //      -image
        //      -name
        //      -rating
        //      - cusines

        footer
            links
            copyright
        */
       <>
        <HeaderContent></HeaderContent>
       {/* {outlet} */}
       <Outlet></Outlet>
       <Footer/>
       </>
    );
}


const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
                children:[{
                    path:"profile",
                    element:<Profile/>
                }]
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:id",
                element:<RestrauntDetails/>
            }
        ]
    },
    
])



const root=ReactDOM.createRoot(document.getElementById("root"));


//async defer
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);

