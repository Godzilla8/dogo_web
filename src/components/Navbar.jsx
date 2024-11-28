import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import WalletConnection from "./WalletConnect";
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Navbar = ({ setWalletAddress, walletAddress }) => {
  const [toggleState, setToggleState] = useState(false);

  const navProps = {
    setToggleState,
    toggleState,
  };
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <Logo />
        <NavLinks navClass={"navlist"} />
        <div className="mob-items">
          <div className="connect-artificial">
            <WalletMultiButton />
          </div>
          {/* <WalletDisconnectButton /> */}
          <div className="nav-wallet">
            {/* <WalletConnection setWalletAddress={setWalletAddress} walletAddress={walletAddress} /> */}
          </div>
          <div onClick={() => setToggleState(!toggleState)} className="hamburger-menu">
            {toggleState ? <BiX /> : <BiMenu />}
          </div>
        </div>
      </div>
      <NavLinks {...navProps} navClass={"mobile-menu"} />
    </div>
  );
};

export default Navbar;
