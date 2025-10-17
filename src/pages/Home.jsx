import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* ----------------------------- COMPONENT IMPORT ----------------------------- */
import Hero from "../components/Hero"; // ✅ FIX: Hero component import added

/* ----------------------------- IMAGE IMPORTS ----------------------------- */
import mtj from "../assets/MTJ.jpg";
import eto from "../assets/eto.jpg";
import expocity from "../assets/expocity.jpg";
import nyp from "../assets/nyp.jpg";
import pechi from "../assets/pechi.jpg";
import narkins from "../assets/narkins.jpg";
import shehbaztikka from "../assets/shehbaztikka.jpg";
import frenchemporio from "../assets/frenchemporio.jpg";

/* ----------------------------- BRANDS SLIDER ----------------------------- */
const brands = [mtj, eto, expocity, nyp, pechi, narkins, shehbaztikka, frenchemporio];

function BrandsSlider() {
  return (
    <section className="bg-gray-50 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 relative">
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 22,
              ease: "linear",
            },
          }}
        >
          {brands.concat(brands).map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-20 sm:w-28 md:w-40 h-20 sm:h-28 md:h-40 flex items-center justify-center
                         rounded-3xl overflow-hidden shadow-lg bg-white 
                         transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-y-1"
            >
              <img
                src={logo}
                alt={`Brand ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------- HOME PAGE ----------------------------- */
export default function Home() {
  return (
    <div>
      <Hero /> {/* ✅ FIXED white screen — Hero component now imported */}

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-brand-black">
              About <span className="text-brand-red">Brands Kahani</span>
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              Brands Kahani is a premium agency focused on brand storytelling,
              digital product design, and franchise systems. We help brands
              grow, scale, and connect through strategy, design, and innovation.
            </p>
            <Link
              to="/about"
              className="inline-block mt-4 sm:mt-6 px-4 sm:px-5 py-2 sm:py-3 rounded-2xl border border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-colors duration-300 text-sm sm:text-base"
            >
              Learn More
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <FeatureCard
              title="Brand Identity"
              desc="Logo systems, guidelines, and storytelling visuals."
            />
            <FeatureCard
              title="Digital Products"
              desc="UX/UI design for web and mobile experiences."
            />
            <FeatureCard
              title="Franchise Systems"
              desc="Playbooks, operations, and brand partnerships."
            />
            <FeatureCard
              title="Growth Marketing"
              desc="Performance campaigns that drive measurable results."
            />
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-16 sm:py-20 bg-gray-50 rounded-3xl">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-3xl font-bold text-center text-brand-black"
        >
          Available Franchise Opportunities
        </motion.h3>
        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          The Latest, Most Profitable Franchise Opportunities
        </p>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <FranchiseCardDemo
            name="ETO"
            category="Fast Food"
            city="Lahore"
            image={eto}
            desc="Premium fast-food burgers with consistent taste, top quality, and youth-driven branding."
          />
          <FranchiseCardDemo
            name="Narkins"
            category="Fashion Brand"
            city="Karachi"
            image={narkins}
            desc="Join Narkins and be part of a fast-growing Fashion Brand network built on innovation and trust."
          />
          <FranchiseCardDemo
            name="Pechi"
            category="Fashion & Apparel"
            city="Islamabad"
            image={pechi}
            desc="Pechi redefines modern fashion with bold design and a movement for creative entrepreneurs."
          />
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Link
            to="/franchise"
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 rounded-2xl bg-brand-red text-white font-medium hover:opacity-90 transition-all duration-300 text-sm sm:text-base"
          >
            View All Opportunities
          </Link>
        </div>
      </section>

      {/* Growth Partners Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-3xl font-bold"
          >
            <span className="text-brand-black">Growth </span>
            <span className="text-brand-red">Partners</span>
          </motion.h3>
        </div>

        <BrandsSlider />
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-16 sm:py-20">
        <div className="rounded-3xl p-6 sm:p-10 border border-black/5 bg-white shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="text-center md:text-left">
            <div className="text-xl sm:text-2xl md:text-2xl font-bold text-brand-black">
              Ready to Partner With Us?
            </div>
            <div className="text-gray-600 mt-2 text-sm sm:text-base">
              Let’s discuss your goals and explore how Brands Kahani can help
              grow your business.
            </div>
          </div>
          <Link
            to="/contact"
            className="mt-4 md:mt-0 w-full md:w-auto text-center px-4 sm:px-6 py-2 sm:py-3 rounded-2xl border border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-colors duration-300 text-sm sm:text-base"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ---------------------------- FEATURE CARDS ----------------------------- */
function FeatureCard({ title, desc }) {
  return (
    <div className="p-4 sm:p-5 rounded-2xl border border-black/5 bg-white hover:shadow-md hover:-translate-y-1 transition-all">
      <div className="font-semibold text-brand-black text-sm sm:text-base">
        {title}
      </div>
      <div className="text-xs sm:text-sm text-gray-600 mt-2">{desc}</div>
    </div>
  );
}

/* ---------------------- FRANCHISE DEMO CARDS ---------------------------- */
function FranchiseCardDemo({ name, category, city, image, desc }) {
  return (
    <article className="p-4 sm:p-6 rounded-2xl border border-black/5 hover:shadow-lg transition-all bg-white">
      <img
        src={image}
        alt={name}
        className="w-full h-40 sm:h-48 md:h-48 object-cover rounded-xl mb-4"
      />
      <div>
        <div className="font-semibold text-lg text-brand-black">{name}</div>
        <div className="text-sm text-gray-500 mb-2">
          {category} • {city}
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">{desc}</p>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <Link
          to="/franchise"
          className="text-sm font-medium text-brand-black hover:text-brand-red"
        >
          View details →
        </Link>
        <Link
          to="/contact"
          className="text-sm font-medium border border-brand-red px-3 py-1 rounded-full text-brand-red hover:bg-brand-red hover:text-white transition-all"
        >
          Apply
        </Link>
      </div>
    </article>
  );
}
