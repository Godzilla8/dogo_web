import React, { useEffect, useState, useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import "./style.scss";
import WelcomePage from "./pages/WelcomePage";
import Loader from "./components/Loader";
import Governance from "./pages/Governance";
import Timeline from "./pages/Timeline";
import Products from "./pages/Products";
import Error from "./pages/Error";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import MintTest from "./pages/MintTest";
import "@solana/wallet-adapter-react-ui/styles.css";
import Mint from "./pages/Mint";

const App = () => {
  const [welcome, setWelcome] = useState(true);
  const [loader, setLoader] = useState(false);

  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [new UnsafeBurnerWalletAdapter()], [network]);

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
      errorElement: <Error />,
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
        {
          path: "/mint_nft",
          element: <Mint />,
        },
      ],
    },
  ]);

  return (
    <>
      {welcome && <WelcomePage handleLaunch={handleLaunch} />}
      {loader && <Loader />}
      {!welcome && !loader && (
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <div className="App">
                <RouterProvider router={router} />
              </div>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      )}
    </>
  );
};

export default App;
