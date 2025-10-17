import React from "react";
import { Link } from "react-router-dom";

/* ----------------------------- IMAGE IMPORTS ----------------------------- */
import eto from "../assets/eto.jpg";
import mtj from "../assets/MTJ.jpg";
import narkins from "../assets/narkins.jpg";
import expocity from "../assets/expocity.jpg";
import pechi from "../assets/pechi.jpg";
import shehbaztikka from "../assets/shehbaztikka.jpg";
import nyp from "../assets/nyp.jpg";
import frenchemporio from "../assets/frenchemporio.jpg";

export default function Franchise() {
  const franchises = [
    {
      name: "ETO",
      description:
        "Premium fast-food burgers with consistent taste, high quality, and youth-oriented branding.",
      image: eto,
    },
    {
      name: "MTJ Fragrances",
      description:
        "Own an MTJ Fragrances Franchise and represent a brand known for elegance, luxury, and lasting scents.",
      image: mtj,
    },
    {
      name: "Narkins",
      description:
        "Join Narkins and become part of a fast-growing brand network built on trust and innovation.",
      image: narkins,
    },
    {
      name: "Expo City",
      description:
        "Expo City is more than a brand — it’s a hub for modern business and innovation.",
      image: expocity,
    },
    {
      name: "Pechi",
      description:
        "Pechi is more than a clothing brand — it’s a movement of modern fashion and entrepreneurship.",
      image: pechi,
    },
    {
      name: "Shehbaz Tikka",
      description:
        "Own a Shehbaz Tikka Franchise and join a trusted brand known for its authentic taste and strong market presence.",
      image: shehbaztikka,
    },
    {
      name: "The New York Pizza",
      description:
        "Own a New York Pizza Franchise and be part of Pakistan’s leading fast-food brand.",
      image: nyp,
    },
    {
      name: "French Emporio",
      description:
        "Join the French Emporio Franchise and step into the world of premium footwear. Style, quality, and great business potential.",
      image: frenchemporio,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-12 sm:py-16">
      {/* Page Heading */}
      <div className="text-center mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-red">
          Franchise Opportunities
        </h1>
      </div>

      {/* Franchise Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {franchises.map((franchise, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex flex-col"
          >
            <div className="relative h-56 sm:h-64 md:h-56 overflow-hidden rounded-t-3xl">
              <img
                src={franchise.image}
                alt={franchise.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 transform hover:scale-110"
              />
            </div>
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-brand-black">
                  {franchise.name}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">
                  {franchise.description}
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-block mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-brand-red text-white rounded-2xl font-medium text-sm sm:text-base text-center hover:bg-brand-black hover:scale-105 transition-all duration-300"
              >
                Apply Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
