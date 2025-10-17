import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* ----------------------------- HERO SECTION ----------------------------- */
export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-16 sm:py-24 flex flex-col md:flex-row gap-6 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-brand-black">
            We Craft <span className="text-brand-red">Brand Stories</span> That
            Sell
          </h1>

          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            We deliver premium creative direction, franchise expertise, and
            AI-powered digital solutions that help brands scale with clarity,
            impact, and style.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/services"
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-2xl border border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-colors text-sm sm:text-base text-center"
            >
              Our Services
            </Link>

            <Link
              to="/franchise"
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-brand-red text-white hover:bg-brand-black transition-colors text-sm sm:text-base text-center"
            >
              Franchise With Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1"
        >
          <img
            src="/brands-kahani/assets/logo-BMmQ2qix.png"
            alt="Brands Kahani Hero"
            className="w-full max-w-md mx-auto rounded-3xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
