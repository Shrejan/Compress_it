import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Entrypoint from "./components/entrypoint";
import Compresser from "./components/compresser";
import Nav from "./components/nav";
import Increaser from "./components/increaser";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Nav/><Entrypoint/></>
    },
    {
      path: "/compresser",
      element: < ><Nav/><Compresser/></>
    },
    {
      path: "/increaser",
      element: < ><Nav/><Increaser/></>
    }
  ]);

  return (
   <><RouterProvider router={router} />
   
    




    </> 
  );
};

export default App;
