import React from "react";

export default function OurPartners({
  partners = [],
  title = "Our Esteemed Partners",
  subtitle = "Trusted Collaborations",
  bg = "bg-white",
}) {
  return (
    <section className={`py-20 ${bg} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h4 className="text-orange-600 font-bold uppercase tracking-widest text-[10px] mb-3">
          {subtitle}
        </h4>

        <h2
          className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title.split(" ")[0]}{" "}
          <span className="text-[#1a3a6b]">
            {title.split(" ").slice(1).join(" ")}
          </span>
        </h2>

        <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* First Loop */}
        <div className="flex animate-marquee whitespace-nowrap py-12 items-center">
          {partners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
        </div>

        {/* Duplicate Loop */}
        <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap py-12 items-center">
          {partners.map((partner, index) => (
            <PartnerCard key={`dup-${index}`} partner={partner} />
          ))}
        </div>

        {/* Fade Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function PartnerCard({ partner }) {
  return (
    <div className="mx-10 md:mx-16 flex flex-col items-center justify-center">
      <div className="w-40 h-24 md:w-52 md:h-28 flex items-center justify-center transition-all duration-500">
        {partner.logo ? (
          <img
            src={partner.logo}
            alt={partner.name}
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <span className="text-lg md:text-xl font-black text-slate-800 text-center px-4">
            {partner.name}
          </span>
        )}
      </div>

      {partner.logo && (
        <p className="mt-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          {partner.name}
        </p>
      )}
    </div>
  );
}