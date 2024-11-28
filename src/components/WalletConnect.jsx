// WalletConnection.js
import React, { useEffect, useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { Link, NavLink, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

// Solana Network (Devnet for testing, use Mainnet for production)
const SOLANA_NETWORK = "https://api.devnet.solana.com";

const WalletConnection = ({ setWalletAddress, walletAddress }) => {
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    if (window.solana) {
      window.solana.on("connect", () => {
        setWalletConnected(true);
        setWalletAddress(window.solana.publicKey.toString());
      });
    }
  }, [setWalletAddress]);

  // Connect to the Solana wallet (Phantom)
  const connectWallet = async () => {
    if (window.solana) {
      try {
        await window.solana.connect();
        setWalletConnected(true);
        setWalletAddress(window.solana.publicKey.toString());
      } catch (error) {
        console.error("Connection failed!", error);
      }
    } else {
      toast.success("Please install a Solana wallet.");
    }
  };

  return (
    <div className="connect-wallet-holder">
      {!walletConnected ? (
        <button className="mint-nft navlink" onClick={connectWallet}>
          Connect Wallet
        </button>
      ) : (
        <>
          <NavLink to="/mint_nft" className="mint-nft navlink">
            {walletAddress ? "Connected" : "Mint NFT"}
          </NavLink>
          {walletAddress && (
            <span className="show-address">
              {walletAddress.slice(0, 7)}...{walletAddress.slice(-7)}
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default WalletConnection;
