import React, { lazy, Suspense } from "react";
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
// import InstaMart from "./components/InstaMart";
import Shimmer from "./components/Shimmer";
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

//lazy loading
const InstaMart=lazy(()=>import("./components/InstaMart"))



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
       <div>
        <HeaderContent></HeaderContent>
       {/* {outlet} */}
       <Outlet></Outlet>
       <Footer/>
       </div>
    );
}


const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Body />
        },
        {
          path: "/about",
          element: <About />,
          children: [
            {
              path: "profile",  // Relative path, not absolute
              element: <Profile />
            }
          ]
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/restaurant/:id",
          element: <RestrauntDetails />
        },
        {
          path:"/instamart",
          element:<Suspense fallback={<Shimmer/>}> 
            <InstaMart/>
          </Suspense>
        }
      ]
    }
  ]);



const root=ReactDOM.createRoot(document.getElementById("root"));


//async defer
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);

export default AppLayout;

