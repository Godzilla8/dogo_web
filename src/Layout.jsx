import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [walletAddress, setWalletAddress] = useState("");
  return (
    <div className="layout">
      <Navbar setWalletAddress={setWalletAddress} walletAddress={walletAddress} />
      <Outlet context={{ walletAddress }} />
      <Footer />
    </div>
  );
};

export default Layout;
