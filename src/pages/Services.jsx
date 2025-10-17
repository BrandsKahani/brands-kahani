import React from "react";

export default function Services() {
  const services = [
    {
      title: "Brand Strategy & Identity",
      desc: "We craft visual systems and narratives that help your brand stand out. From logo design to complete brand guidelines — we make sure your story looks and feels consistent everywhere.",
      icon: "🎨",
    },
    {
      title: "Social Media Marketing",
      desc: "Our digital team creates data-driven campaigns that attract, engage, and convert audiences. We handle everything — content creation, ad management, influencer outreach, and analytics.",
      icon: "📱",
    },
    {
      title: "Franchise Development Agency",
      desc: "We build, launch, and scale franchise systems. From playbooks and SOPs to onboarding and lead generation — we make franchise expansion simple and sustainable.",
      icon: "🏢",
    },
    {
      title: "Performance Marketing",
      desc: "We specialize in ROI-focused ad campaigns using Meta, Google, and TikTok Ads — delivering measurable growth through precise targeting and conversion optimization.",
      icon: "📈",
    },
    {
      title: "Digital Product Design",
      desc: "From websites to mobile apps — we design experiences that convert. UX/UI that’s sleek, simple, and effective, tailored to your audience and goals.",
      icon: "💻",
    },
    {
      title: "Creative Campaigns",
      desc: "We blend storytelling and strategy to design high-impact campaigns — whether for product launches, rebrands, or social movements.",
      icon: "🚀",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-12 sm:py-16">
      {/* Header Section */}
      <div className="text-center mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-red">
          Our Services
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          At <span className="font-semibold text-brand-black">Brands Kahani</span>, we help businesses grow through strategic branding, franchise systems, and high-performing digital marketing.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((s, i) => (
          <article
            key={i}
            className="p-6 sm:p-8 rounded-3xl border border-black/5 hover:shadow-lg transform hover:-translate-y-1 transition-all bg-white flex flex-col"
          >
            <div className="text-4xl mb-3">{s.icon}</div>
            <h2 className="text-xl sm:text-2xl font-semibold text-brand-black">
              {s.title}
            </h2>
            <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed flex-1">
              {s.desc}
            </p>
          </article>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 sm:mt-16 text-center">
        <p className="text-base sm:text-lg font-medium text-gray-700">
          Ready to scale your brand or franchise with us?
        </p>
        <a
          href="/contact"
          className="inline-block mt-4 px-6 py-3 rounded-2xl bg-brand-red text-white font-semibold hover:opacity-90 transition-all"
        >
          Let’s Talk
        </a>
      </div>
    </section>
  );
}
