import React, { useState } from "react";
import bs58 from "bs58";
import "./mint.scss";
import nftImage from "../assets/suit-dogo.png";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { generateSigner, percentAmount, keypairIdentity } from "@metaplex-foundation/umi";
import { clusterApiUrl } from "@solana/web3.js";
import {
  createNft,
  fetchDigitalAsset,
  mplTokenMetadata,
} from "@metaplex-foundation/mpl-token-metadata";

const MintTest = () => {
  const [minting, setMinting] = useState(false);
  const [minted, setMinted] = useState(false);

  const mintNFT = async () => {
    setMinting(true);
    try {
      console.log("Loading keypair from environment...");
      const keyToArray = bs58.decode(
        "5HkgnNLJmkKcV9oTmqAh1pzSPVHGBHzdSmnxawTwPhf5eit59UvEEDQ44fN1vebrwocdtbEsYjbcNReeCac4Rmmm"
      );

      //   const privateKey = JSON.parse(keyToArray || "[]");
      //   if (privateKey.length === 0) {
      //     throw new Error("SOLANA_PRIVATE_KEY is not set in .env file");
      //   }

      console.log("Creating Umi instance...");
      const umi = createUmi(clusterApiUrl("devnet"));

      const keypair =
        keyToArray.length === 64
          ? umi.eddsa.createKeypairFromSecretKey(keyToArray)
          : umi.eddsa.createKeypairFromSecretKey(
              new Uint8Array([...keyToArray, ...new Uint8Array(32)])
            );

      //   const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(privateKey));

      // Use keypairIdentity to set the keypair as the signer
      const signer = keypairIdentity(keypair);
      umi.use(signer);
      umi.use(mplTokenMetadata());

      console.log("Keypair loaded. Public key:", keypair.publicKey);

      console.log("Generating new mint address...");
      const mint = generateSigner(umi);

      console.log("Creating NFT...");
      const { signature } = await createNft(umi, {
        mint,
        name: "DOGO NFT",
        // Replace this with your Arweave metadata URI
        uri: "https://raw.githubusercontent.com/Godzilla8/dogo_nft_metadata/main/metadata.json",
        maxSupply: 1,
        sellerFeeBasisPoints: percentAmount(0),
        creators: [
          {
            address: keypair.publicKey,
            share: 100,
            verified: true,
          },
        ],
      }).sendAndConfirm(umi);

      console.log("NFT created successfully!");
      console.log("Mint address:", mint.publicKey);
      console.log("Transaction signature:", signature);

      console.log("Fetching digital asset...");
      const asset = await fetchDigitalAsset(umi, mint.publicKey);
      console.log("Digital Asset:", asset);
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
          Mint Our <span>Genesis</span>Test NFT
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

export default MintTest;
