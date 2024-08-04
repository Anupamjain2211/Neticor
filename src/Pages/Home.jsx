import React from "react";
import Banner from "../assets/livecampaigns-banner.png";
import { motion } from "framer-motion";
import Services from "./Services";

const Home = () => {
  return (
    <div className="bg-neutralSilver pt-16 mb-48 md:pt-0 md:mb-0 md:mt-12">
      <div className="px-4 lg:px-8 max-w-screen mx-auto min-h-screen flex flex-col md:flex-row items-center justify-between">
        {/* Image on top for small devices and on the right for larger devices */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
          <motion.img
            src={Banner}
            alt="Banner"
            className="w-full h-auto object-cover max-w-full max-h-[800px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </div>
        {/* Text content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-4 text-center md:text-left">
          <h1 className="text-4xl font-bold text-neutralDGrey mb-4">
            Revolutionizing Influencer Marketing with AI
          </h1>
          <p className="text-lg text-neutralDGrey mb-4">
            Welcome to Neticor, the forefront of innovation in influencer
            marketing. Our AI-based platform transforms how brands connect with
            influencers and engage with their target audience. At Neticor, we
            believe in harnessing the power of artificial intelligence to create
            seamless, efficient, and impactful marketing solutions. Here’s what
            sets us apart:
          </p>
          <div className="flex justify-center md:justify-start w-full">
            <button className="bg-neutralPrimary text-white py-3 px-8 transition-all duration-300 rounded hover:bg-cyan-700 text-xl font-bold">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
