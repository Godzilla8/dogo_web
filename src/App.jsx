import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import "./style.scss";
import WelcomePage from "./pages/WelcomePage";
import Loader from "./components/Loader";
import Governance from "./pages/Governance";
import Timeline from "./pages/Timeline";
import Products from "./pages/Products";

const App = () => {
  const [welcome, setWelcome] = useState(true);
  const [loader, setLoader] = useState(false);

  const handleLaunch = () => {
    setWelcome(false);
    localStorage.setItem("isNewUser", JSON.stringify("true"));
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };

  useEffect(() => {
    const isUser = JSON.parse(localStorage.getItem("isNewUser")) || null;
    if (isUser) setWelcome(false);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/governance",
          element: <Governance />,
        },
        {
          path: "/timeline",
          element: <Timeline />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
  ]);

  return (
    <>
      {welcome && <WelcomePage handleLaunch={handleLaunch} />}
      {loader && <Loader />}
      {!welcome && !loader && (
        <div className="App">
          <RouterProvider router={router} />
        </div>
      )}
    </>
  );
};

export default App;
