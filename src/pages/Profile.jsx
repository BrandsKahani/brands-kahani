'use client';

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// --- Import team images ---
import akhlaqImg from "../assets/akhlaq.jpg";
import waseemImg from "../assets/waseem.jpg";
import ahsanImg from "../assets/ahsan.jpg";
import araafImg from "../assets/araaf.jpg";
import afaqImg from "../assets/afaq.jpg";
import ishtiaqImg from "../assets/ishtiaq.jpg";

// --- Import partner images ---
import partner1 from "../assets/eto.jpg";
import partner2 from "../assets/expocity.jpg";
import partner3 from "../assets/frenchemporio.jpg";
import partner4 from "../assets/MTJ.jpg";
import partner5 from "../assets/narkins.jpg";
import partner6 from "../assets/nyp.jpg";
import partner7 from "../assets/pechi.jpg";
import partner8 from "../assets/shehbaztikka.jpg";

export default function ProfilePage() {
  const teamMembers = [
    { img: akhlaqImg, name: "Akhlaq Ahmed", role: "Founder & CEO" },
    { img: waseemImg, name: "Muhammad Waseem", role: "Co-Founder & Chief Commercial Officer" },
    { img: ahsanImg, name: "Ahsan Anis", role: "Co-Founder & Chief Strategy Officer" },
    { img: araafImg, name: "Araaf Abdullah", role: "Executive Director" },
    { img: afaqImg, name: "Afaq Ahmed", role: "Executive Director" },
    { img: ishtiaqImg, name: "Ishtiaq Ahmed", role: "Executive Director" },
  ];

  const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8];

  const overviewData = [
    {
      titleEN: "INTRODUCTION",
      titleAR: "مقدمة",
      desc: `Brands Kahani is a leading marketing and franchising agency dedicated to transforming local and international
      businesses into iconic brands. We believe that every successful brand is built on a strong story, creative strategy,
      and consistent innovation. Our approach blends creative storytelling with data-driven marketing, ensuring our clients
      not only grow but sustain their market presence for years.`,
    },
    {
      titleEN: "OUR VISION",
      titleAR: "رؤيتنا",
      desc: `Our vision is to be recognized as the most trusted brand consultancy agency in Pakistan and beyond —
      one that inspires, empowers, and elevates businesses through creativity and innovation.`,
    },
    {
      titleEN: "OUR MISSION",
      titleAR: "مهمتنا",
      desc: `Our mission is to offer 360° brand solutions — from strategic marketing and franchising development to digital
      campaigns and creative design.`,
    },
    {
      titleEN: "FOUNDER'S MESSAGE",
      titleAR: "رسالة المؤسس",
      desc: `At Brands Kahani, our journey started with a simple belief: every brand has a story worth telling.`,
    },
    {
      titleEN: "OUR TEAM",
      titleAR: "فريقنا",
      desc: `Our team is our greatest strength — a diverse group of thinkers, strategists, designers, and digital experts.`,
    },
    {
      titleEN: "OUR CLIENTS",
      titleAR: "عملائنا",
      desc: `Brands Kahani takes pride in serving a wide range of clients from various industries.`,
    },
    {
      titleEN: "OUR PARTNERS",
      titleAR: "شركاؤنا",
      desc: `We collaborate with industry leaders and strategic partners who share our commitment to excellence.`,
    },
    {
      titleEN: "OUR SERVICES",
      titleAR: "خدماتنا",
      desc: `From brand consultancy to franchise development, digital marketing, design, and content creation — we offer it all.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-10 items-center mb-20"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
              BRANDS <span className="text-red-600 drop-shadow">KAHANI</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 font-medium tracking-wide">
              COMPANY PROFILE
            </p>
            <div className="space-y-3 text-gray-700 leading-relaxed bg-white/70 backdrop-blur-md p-5 rounded-xl shadow-md border border-gray-100">
              <p className="font-semibold text-lg">INTRODUCTION / مقدمة</p>
              <p>
                Brands Kahani helps businesses grow strategically, maintain market standards,
                and enhance brand value through innovation and collaboration.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full h-80 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-red-500/10"
          >
            <img
              src="https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=1400&q=80"
              alt="Brands Kahani"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.header>

        {/* --- Company Overview Section --- */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 px-8 mb-20 bg-gradient-to-r from-white via-red-50/50 to-white rounded-3xl shadow-lg border border-red-100"
        >
          <h2 className="text-4xl font-extrabold mb-14 text-center text-gray-900 tracking-wide">
            COMPANY OVERVIEW <span className="text-red-600">/ نظرة عامة على الشركة</span>
          </h2>

          <div className="space-y-10">
            {overviewData.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-white rounded-2xl shadow-sm border hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-red-600 mb-2">{item.titleEN}</h3>
                <p className="text-gray-500 text-sm mb-4" dir="rtl">{item.titleAR}</p>
                <p className="text-gray-700 text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* OUR TEAM */}
        <SectionWrapper>
          <h2 className="text-3xl font-extrabold mb-12 text-center">
            <span className="text-black">OUR TEAM</span>{" "}
            <span className="text-red-600">/ فريقنا</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <TeamCard key={i} img={member.img} nameEN={member.name} roleEN={member.role} />
            ))}
          </div>
        </SectionWrapper>

        {/* OUR PARTNERS */}
        <SectionWrapper>
          <h2 className="text-3xl font-extrabold mb-12 text-center">
            <span className="text-black">OUR PARTNERS</span>{" "}
            <span className="text-red-600">/ شركاؤنا</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
            {partners.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="bg-white rounded-full shadow-md p-5 flex items-center justify-center border h-28 w-28 mx-auto hover:shadow-xl transition-all"
              >
                <img
                  src={p}
                  alt="partner"
                  className="w-20 h-20 object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-20 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-3xl shadow-lg mt-20"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to grow your brand?</h3>
          <p className="mb-6 text-white/90 max-w-xl mx-auto">
            Contact Brands Kahani today and let’s craft your success story together.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-red-600 font-semibold rounded-full shadow hover:scale-105 transition-transform"
          >
            Contact Us
          </Link>
        </motion.section>
      </div>
    </div>
  );
}

/* --- Helper Components --- */
function SectionWrapper({ title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      {title && (
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
}

function TeamCard({ img, nameEN, roleEN }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition"
    >
      <div className="w-full h-56 bg-gray-200 flex items-center justify-center">
        {img ? (
          <img src={img} alt={nameEN} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400 text-sm">Image Coming Soon</span>
        )}
      </div>
      <div className="p-4 text-center">
        <h4 className="font-semibold text-lg text-gray-800">{nameEN}</h4>
        <p className="text-sm text-gray-600">{roleEN}</p>
      </div>
    </motion.div>
  );
}
