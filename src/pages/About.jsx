'use client';
import React from 'react';
import { motion } from 'framer-motion';

// 👇 Import team images from src/assets
import akhlaqImg from '../assets/akhlaq.jpg';
import waseemImg from '../assets/waseem.jpg';
import ahsanImg from '../assets/ahsan.jpg';
import araafImg from '../assets/araaf.jpg';
import afaqImg from '../assets/afaq.jpg';
import ishtiaqImg from '../assets/ishtiaq.jpg';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-gray-800">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          About <span className="text-red-600">Brands Kahani</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Brands Kahani is a full-service marketing and franchising agency helping businesses
          evolve into powerful, purpose-driven brands. We combine creativity, strategy, and
          technology to craft stories that connect with customers and inspire growth.
        </p>
      </motion.section>

      {/* Our Story */}
      <motion.section
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <h2 className="text-3xl font-bold text-black mb-4 border-l-4 border-red-600 pl-3">
          Our Story
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Every great brand begins with a story — and ours began with a vision to empower
          entrepreneurs. We started Brands Kahani to blend storytelling and strategy, helping
          businesses stand out in a crowded marketplace. From local startups to national franchises,
          we’ve helped brands build a voice, a vision, and a loyal following.
        </p>
      </motion.section>

      {/* Our Approach */}
      <motion.section
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <h2 className="text-3xl font-bold text-black mb-4 border-l-4 border-red-600 pl-3">
          Our Approach
        </h2>
        <p className="text-gray-700 leading-relaxed">
          At Brands Kahani, we believe marketing is more than promotion — it’s connection. Our team
          blends deep market insight with creative design to deliver strategies that are practical,
          measurable, and authentic. We focus on long-term brand relationships, not just
          short-term campaigns.
        </p>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-14 bg-black text-white rounded-2xl p-10"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-red-500">Why Choose Us?</h2>
        <ul className="grid sm:grid-cols-2 gap-4 text-gray-200">
          <li>✅ Personalized brand strategy and creative storytelling</li>
          <li>✅ Proven expertise in franchise development and consulting</li>
          <li>✅ Data-driven marketing that delivers measurable results</li>
          <li>✅ Dedicated support and transparent communication</li>
        </ul>
      </motion.section>

      {/* Our Vision */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h2 className="text-3xl font-bold text-black mb-4 border-l-4 border-red-600 inline-block pl-3">
          Our Vision
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          To become the most trusted marketing and franchising partner for visionary businesses —
          helping every brand tell its unique story and reach new heights of success.
        </p>
      </motion.section>

      {/* Meet Our Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-black">
          Meet <span className="text-red-600">Our Team</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          <TeamCard img={akhlaqImg} name="Akhlaq Ahmed" role="Founder & CEO" />
          <TeamCard img={waseemImg} name="Muhammad Waseem" role="Co-Founder & Chief Commercial Officer" />
          <TeamCard img={ahsanImg} name="Ahsan Anis" role="Co-Founder & Chief Strategy & Planning Officer" />
          <TeamCard img={araafImg} name="Araaf Abdullah" role="Executive Director" />
          <TeamCard img={afaqImg} name="Afaq Ahmed" role="Executive Director" />
          <TeamCard img={ishtiaqImg} name="Ishtiaq Ahmed" role="Executive Director" />
        </div>
      </motion.section>
    </div>
  );
}

function TeamCard({ img, name, role }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all"
    >
      <div className="w-full h-64 overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-black">{name}</h3>
        <p className="text-gray-600 mt-1">{role}</p>
      </div>
    </motion.div>
  );
}
