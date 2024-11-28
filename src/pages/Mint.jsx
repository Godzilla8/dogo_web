import React, { useState } from "react";
import "./mint.scss";
import nftImage from "../assets/suit-dogo.png";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { generateSigner, percentAmount, signerIdentity } from "@metaplex-foundation/umi";
// import { clusterApiUrl } from "@solana/web3.js";
import { createNft, mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl, Connection, sendAndConfirmTransaction } from "@solana/web3.js";
import { toWeb3JsTransaction } from "@metaplex-foundation/umi-web3js-adapters";

const Mint = () => {
  const { publicKey, signTransaction, connected } = useWallet();
  const [minting, setMinting] = useState(false);
  const [minted, setMinted] = useState(false);

  const mintNFT = async () => {
    try {
      if (!connected) {
        throw new Error("Wallet not connected. Please connect your wallet first!");
      }

      if (typeof signTransaction !== "function") {
        throw new Error("Wallet does not support transaction signing.");
      }

      setMinting(true);

      // Create Umi instance
      const umi = createUmi(clusterApiUrl("devnet")).use(mplTokenMetadata());

      umi.use(
        signerIdentity({
          publicKey,
          async signTransaction(umiTransaction) {
            console.log("Converting Umi transaction to Solana transaction...");
            const solanaTransaction = toWeb3JsTransaction(umiTransaction);

            console.log("Requesting wallet to sign transaction...");
            const signedTransaction = await signTransaction(solanaTransaction);

            if (!signedTransaction) {
              throw new Error("Failed to sign the transaction.");
            }

            console.log("Transaction signed successfully.");
            return signedTransaction;
          },
        })
      );

      console.log("Connected wallet:", publicKey.toBase58());

      // Generate mint signer
      const mint = generateSigner(umi);

      console.log("Creating NFT...");
      const umiTransaction = await createNft(umi, {
        mint,
        name: "DOGO NFT",
        uri: "https://raw.githubusercontent.com/Godzilla8/dogo_nft_metadata/main/metadata.json",
        sellerFeeBasisPoints: percentAmount(5),
        maxSupply: 1,
        creators: [
          {
            address: publicKey,
            share: 100,
            verified: true,
          },
        ],
      });

      console.log("NFT transaction created. Converting to Solana transaction...");
      const solanaTransaction = toWeb3JsTransaction(umiTransaction);

      console.log("Requesting wallet to sign Solana transaction...");
      const signedTransaction = await signTransaction(solanaTransaction);

      console.log("Sending transaction to Solana blockchain...");
      const connection = new Connection(clusterApiUrl("devnet"));
      const signature = await sendAndConfirmTransaction(connection, signedTransaction);

      console.log("NFT minted successfully!");
      console.log("Transaction signature:", signature);
      setMinting(false);
      setMinted(true);
    } catch (error) {
      console.error("Error:", error);
      console.error("Stack trace:", error.stack);
      setMinting(false);
    }
  };

  return (
    <div className="mint">
      <div className="mint-header">
        <h1>
          Mint Our <span>Genesis</span>NFT
        </h1>
        <span className="nft-available">
          Only <span>2000</span> Available!
        </span>
      </div>
      <div className="mint-count">0 / 2000 Minted</div>

      <div className="nft-cards">
        <div className="nft-card">
          <div className="nft-card-wrapper">
            <div className="nft-number">#001</div>
            <div className="nft-img">
              <img src={nftImage} alt="" />
            </div>
            <div className="nft-info">
              The Genesis of everything good and evil starts with an unquenchable thirst
            </div>
          </div>
        </div>
      </div>
      <div className="mint-nft-btn">
        <button role="button" onClick={mintNFT} disabled={minting}>
          <span className="text">{minting ? "Minting..." : "Mint DOGO NFT"}</span>
          <span>Mint NFT</span>
        </button>
        {minted && <div>NFT Minted Successfully!</div>}
      </div>
    </div>
  );
};

export default Mint;
