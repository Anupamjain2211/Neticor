import React from 'react';
import Banner from "../assets/banner.png";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="bg-neutralSilver pt-16 mb-48 md:pt-0 md:mb-0 md:mt-0">
      <div className="px-4 lg:px-8 max-w-screen mx-auto min-h-screen h-screen flex flex-col md:flex-row items-center justify-between">
        
        {/* Text content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-4 text-center md:text-left">
          <h1 className="text-4xl font-bold text-neutralDGrey mb-4">
            Join Neticor
          </h1>
          <p className="text-lg text-neutralDGrey mb-4">
            AI-Driven Influencer Matching: Identifies optimal influencers using AI, analyzing demographics, engagement, and content alignment.
          </p>
          <p className="text-lg text-neutralDGrey mb-4">
            Data-Backed Campaign Insights: Provides analytics and real-time metrics for performance tracking and data-driven decisions.
          </p>
          <p className="text-lg text-neutralDGrey mb-4">
            Automated Campaign Management: Handles logistics like contract management, content scheduling, and approval workflows.
          </p>
          <p className="text-lg text-neutralDGrey mb-4">
            Audience Analysis and Targeting: Offers detailed insights into audience behavior to ensure precise targeting.
          </p>
          <p className="text-lg text-neutralDGrey mb-4">
            Predictive Performance Modeling: Forecasts campaign outcomes and optimizes strategies with AI predictions.
          </p>
          <p className="text-lg text-neutralDGrey mb-4">
            Customized Campaign Strategies: Tailors strategies to unique brand goals, whether for awareness, sales, or engagement.
          </p>
          
          <div className="flex justify-center md:justify-start w-full">
            {/* Button or other content can be added here if needed */}
          </div>
        </div>

        {/* Image on top for small devices and on the right for larger devices */}
        <div className="w-full md:w-1/2 h-[full] flex justify-center md:justify-end mb-8 md:mb-0 mt-24">
          <motion.img
            src={Banner}
            alt="Banner"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
