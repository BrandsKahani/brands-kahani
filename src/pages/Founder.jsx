import React from "react";
import { motion } from "framer-motion";

// 👇 Import all images properly
import akhlaqImg from "../assets/akhlaq.jpg";
import waseemImg from "../assets/waseem.jpg";
import ahsanImg from "../assets/ahsan.jpg";
import araafImg from "../assets/araaf.jpg";
import afaqImg from "../assets/afaq.jpg";
import ishtiaqImg from "../assets/ishtiaq.jpg";

export default function Founder() {
  return (
    <div className="bg-white">
      {/* ---------------- Founder Section ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-lg border border-black/5"
          >
            <img
              src={akhlaqImg}
              alt="Akhlaq Ahmed"
              className="w-full h-80 sm:h-96 object-cover"
            />
          </motion.div>

          {/* Founder Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-black">
              Akhlaq <span className="text-brand-red">Ahmed</span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-2 mb-6">
              Founder & CEO — Brands Kahani
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
              Akhlaq Ahmed is a visionary entrepreneur and the driving force
              behind Brands Kahani. His leadership blends creativity with
              strategy — inspiring teams to build brands that tell powerful
              stories and deliver measurable impact. His mission is to empower
              businesses to grow through innovation, storytelling, and
              excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Meet Our Team Section ---------------- */}
      <section className="bg-gray-50 py-16 sm:py-20 rounded-t-3xl border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-10"
          >
            Meet Our <span className="text-brand-red">Team</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md p-5 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition-all border border-black/5"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border border-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-brand-black text-lg">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.designation}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* -------------------- Team Data -------------------- */
const teamMembers = [
  {
    name: "Muhammad Waseem",
    designation: "Co-Founder | Chief Commercial Officer",
    image: waseemImg,
  },
  {
    name: "Ahsan Anis",
    designation: "Co-Founder | Chief Strategy & Planning Officer",
    image: ahsanImg,
  },
  {
    name: "Araaf Abdullah",
    designation: "Executive Director",
    image: araafImg,
  },
  {
    name: "Afaq Ahmed",
    designation: "Executive Director",
    image: afaqImg,
  },
  {
    name: "Ishtiaq Ahmed",
    designation: "Executive Director",
    image: ishtiaqImg,
  },
];
