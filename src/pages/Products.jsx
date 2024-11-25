import React from "react";
import ProductCard from "../components/ProductCard";
import nft_market from "../assets/nft-market.webp";
import portfolio from "../assets/portfolio.webp";
import community_hub from "../assets/community-hub.webp";
import academy from "../assets/academy.webp";

const CARD_DATA = [
  {
    img: nft_market,
    title: "NFT MARKETPLACE",
    desc: "Discover and trade unique meme-themed NFTs in DOGO’s vibrant marketplace, where creativity meets crypto. Own, sell, and collect exclusive digital assets that embody meme culture.",
  },
  {
    img: portfolio,
    title: "PORTFOLIO MANAGER",
    desc: "Manage your meme coin investments with DOGO’s smart portfolio tool. Get data-driven insights and tailored suggestions for maximizing your meme coin potential.",
  },
  {
    img: community_hub,
    title: "COMMUNITY HUB",
    desc: "Join the ultimate meme community hub to discuss, research, and validate meme projects. Connect with experts, share insights, and support authentic projects with confidence.",
  },
  {
    img: academy,
    title: "BLOCKCHAIN ACADEMY",
    desc: "Learn the fundamentals of blockchain and meme investing with DOGO’s Blockchain Academy. From beginners to experts, our courses empower you to navigate the crypto world.",
  },
];

const Products = () => {
  return (
    <div className="products">
      <div className="product-cards">
        {CARD_DATA.map((card, index) => (
          <ProductCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Products;
