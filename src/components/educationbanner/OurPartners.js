import React from "react";

const PARTNERS = [
  { name: "ISB", logo: "/ourpartnerslogos/isb.png" },
  { name: "Brandix India", logo: "/ourpartnerslogos/brandix.png" },
  { name: "Save the Children", logo: "/ourpartnerslogos/savethechildren.png" },
  { name: "APSSDC", logo: "/ourpartnerslogos/andhrapradeshstateskilldevelopmentcorporation.png" },
  { name: "LIC", logo: "/ourpartnerslogos/lic.png" },
  { name: "Union Bank of India", logo: "/ourpartnerslogos/uboi.png" },
  { name: "IIM - Udaipur", logo: "/ourpartnerslogos/iimu.png" },
  { name: "Mahindra University", logo: "/ourpartnerslogos/mahindrauniversity.png" },
  { name: "Sky Veda", logo: "" },
  { name: "Addlife Projects Private Limited", logo: "/ourpartnerslogos/adlifpvtltd.jpeg" },
  { name: "Department of Health and Family Welfare", logo: "" },
  { name: "Government of Andhra Pradesh", logo: "/ourpartnerslogos/govofandrapradesh.png" },
];

export default function OurPartners() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h4 className="text-orange-600 font-bold uppercase tracking-widest text-[10px] mb-3">
          Trusted Collaborations
        </h4>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Our Esteemed <span className="text-[#1a3a6b]">Partners</span>
        </h2>
        <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-12 items-center">
          {PARTNERS.map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
        </div>

        <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap py-12 items-center">
          {PARTNERS.map((partner, index) => (
            <PartnerCard key={`dup-${index}`} partner={partner} />
          ))}
        </div>

        {/* Smooth Fade Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 45s linear infinite;
        }
      `}</style>
    </section>
  );
}

function PartnerCard({ partner }) {
  return (
    <div className="mx-10 md:mx-16 flex flex-col items-center justify-center group cursor-default">
      {/* Uncomment 'group-hover:scale-110' below if you want logos 
         to become BIG when hovering over them 
      */}
      <div className="w-40 h-24 md:w-52 md:h-28 flex items-center justify-center transition-all duration-500 transform /* group-hover:scale-110 */">
        {partner.logo ? (
          <img 
            src={partner.logo} 
            alt={partner.name} 
            className="max-w-full max-h-full object-contain opacity-100 transition-all"
          />
        ) : (
          <span className="text-lg md:text-xl font-black text-slate-800 transition-colors text-center whitespace-normal leading-tight px-4">
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