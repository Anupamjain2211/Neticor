import React from "react";
import { motion } from "framer-motion";
import Blog from "./Blog";

const Services = () => {
  return (
    <>
      <div className="bg-gray-100 py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Discover how we've helped our clients!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Card 1 */}
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg max-w-xs mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src=""
              alt="Service 1"
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-2">Service 1</h3>
            <p className="text-gray-600 mt-1 text-sm">
              Brief description of the service or how it benefited the client.
            </p>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg max-w-xs mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src=""
              alt="Service 2"
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-2">Service 2</h3>
            <p className="text-gray-600 mt-1 text-sm">
              Brief description of the service or how it benefited the client.
            </p>
          </motion.div>
          {/* Card 3 */}
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg max-w-xs mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src=""
              alt="Service 3"
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-2">Service 3</h3>
            <p className="text-gray-600 mt-1 text-sm">
              Brief description of the service or how it benefited the client.
            </p>
          </motion.div>
          {/* Card 4 */}
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg max-w-xs mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src=""
              alt="Service 4"
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-2">Service 4</h3>
            <p className="text-gray-600 mt-1 text-sm">
              Brief description of the service or how it benefited the client.
            </p>
          </motion.div>
          {/* Card 5 */}
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg max-w-xs mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src=""
              alt="Service 5"
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-2">Service 5</h3>
            <p className="text-gray-600 mt-1 text-sm">
              Brief description of the service or how it benefited the client.
            </p>
          </motion.div>
        </div>
      </div>
      <Blog />
    </>
  );
};

export default Services;
