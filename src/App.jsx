import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Aboutus from "./components/Aboutus";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import { useRouteError } from "react-router-dom";

/*
********UI*********

Header
  -Logo
  -Nav Items
Body
  -Search Bar
  -Restrurent Container
  -Restrurent Card
    -img
    -Name of the restrurent, star rating, cuisine, delivery time
Footer
  -Copyright
  -Links
  -Address
  -Contact


*/

function App() {
  
  return (
    <>
   {/* Header */}
   <Header/>
   <Body/>
    </>
   
  )
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
  },
  {
    path: "/about",
    element: <Aboutus/>,
  }

]);



export default App
