'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const products = [
  {
    title: 'Garments',
    image: '/product/bag.png',
    alt: 'Woman in red polka dot dress',
    description: 'Wide range of hand crafted garments available for wholesale and retail.',
    emoji: '👗',
    color: '#0D9488',
    accent: '#99F6E4',
  },
  {
    title: 'Bags & Accessories',
    image: '/product/cute-bag.png',
    alt: 'Collection of colorful bags',
    description: 'Trendy wallets, tote bags, laptop bags and more — crafted by skilled artisans using sustainable materials.',
    emoji: '👜',
    color: '#B45309',
    accent: '#FCD34D',
  },
  {
    title: 'Bulk Bags',
    image: '/product/small-bag.png',
    alt: 'Decorative bulk bags',
    description: 'Select from our catalogues for corporate gifting, training programs or return gifts.',
    emoji: '🛍️',
    color: '#4338CA',
    accent: '#A5B4FC',
  },
  {
    title: 'Embroidery Work',
    image: '/product/dress.png',
    alt: 'Person working on embroidery',
    description: 'Professional hand embroidery, pattern making and tailoring by our skilled artisan women.',
    emoji: '🪡',
    color: '#166534',
    accent: '#86EFAC',
  },
  {
    title: 'Newspaper Bags',
    image: '/product/cardboard.jpg',
    alt: 'Eco-friendly newspaper bags',
    description: 'Go green with handmade newspaper bags — perfect for return gifts and eco-friendly packaging.',
    emoji: '♻️',
    color: '#9A3412',
    accent: '#FDBA74',
  },
  {
    title: 'Bangles',
    image: '/product/bangles.jpg',
    alt: 'Handcrafted bangles',
    description: 'Beautiful traditional handmade bangles crafted using techniques passed down through generations.',
    emoji: '✨',
    color: '#854D0E',
    accent: '#FDE047',
  },
];

/* ── Floating background bubbles ── */
const BgBubbles = () => {
  const bubbles = useRef(
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: 30 + Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 12 + Math.random() * 16,
      opacity: 0.03 + Math.random() * 0.06,
      color: products[i % products.length].color,
    }))
  ).current;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            bottom: '-10%',
            background: b.color,
            opacity: b.opacity,
            animation: `floatUp ${b.duration}s ${b.delay}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
};

/* ── Single product bubble card ── */
const BubbleCard = ({ product, index }) => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const delay = `${index * 110}ms`;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center cursor-pointer select-none"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.75)',
        transition: `opacity 0.65s ${delay} cubic-bezier(.34,1.56,.64,1),
                     transform 0.65s ${delay} cubic-bezier(.34,1.56,.64,1)`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Bubble ── */}
      <div
        className="relative rounded-full"
        style={{
          width: 220,
          height: 220,
          flexShrink: 0,
          overflow: 'hidden',
          boxShadow: hovered
            ? `0 0 0 5px ${product.accent}, 0 0 0 10px ${product.color}40, 0 28px 60px ${product.color}55`
            : `0 0 0 2px ${product.accent}88, 0 12px 32px ${product.color}33`,
          transition: 'box-shadow 0.4s ease, transform 0.4s cubic-bezier(.34,1.56,.64,1)',
          transform: hovered ? 'scale(1.1) translateY(-10px)' : 'scale(1) translateY(0)',
          animation: `wobble ${4.5 + index * 0.25}s ${delay} infinite ease-in-out`,
        }}
      >
        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.alt}
          fill
          className="object-cover"
          style={{
            transition: 'filter 0.4s ease, transform 0.4s ease',
            filter: hovered ? 'brightness(0.2) saturate(0.6)' : 'brightness(0.88)',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
          }}
          sizes="220px"
          quality={90}
        />

        {/* Glass sheen — always on top */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            zIndex: 2,
            background: `
              radial-gradient(circle at 28% 22%, rgba(255,255,255,0.50) 0%, rgba(255,255,255,0.06) 40%, transparent 62%),
              radial-gradient(circle at 72% 78%, ${product.color}45 0%, transparent 52%)
            `,
          }}
        />

        {/* ── Hover Description Overlay ── */}
        <div
          className="absolute inset-0 rounded-full flex flex-col items-center justify-center text-center"
          style={{
            zIndex: 5,
            padding: '24px 20px',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'scale(1)' : 'scale(0.88)',
            transition: 'opacity 0.35s ease, transform 0.35s ease',
            pointerEvents: 'none',
          }}
        >
          <div style={{ fontSize: 30, lineHeight: 1, marginBottom: 10 }}>{product.emoji}</div>
          <p
            style={{
              color: '#ffffff',
              fontSize: '0.76rem',
              fontWeight: 300,
              lineHeight: 1.6,
              fontFamily: "'Lora', serif",
              textShadow: '0 1px 6px rgba(0,0,0,0.8)',
            }}
          >
            {product.description}
          </p>
        </div>
      </div>

      {/* ── Title Pill ── */}
      <div
        style={{
          marginTop: 14,
          padding: '6px 22px',
          borderRadius: 999,
          fontSize: '0.82rem',
          fontWeight: 600,
          letterSpacing: '0.04em',
          fontFamily: "'Playfair Display', serif",
          background: hovered ? product.color : '#ffffff',
          color: hovered ? '#ffffff' : product.color,
          border: `2px solid ${product.color}`,
          boxShadow: hovered ? `0 6px 18px ${product.color}55` : `0 2px 8px ${product.color}22`,
          transition: 'all 0.35s ease',
          whiteSpace: 'nowrap',
        }}
      >
        {product.title}
      </div>
    </div>
  );
};

/* ── Section ── */
const ProductBubbleShowcase = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:ital,wght@0,300;1,300&display=swap');

        @keyframes floatUp {
          0%   { transform: translateY(0) scale(1);      opacity: 0.05; }
          50%  { transform: translateY(-50vh) scale(1.1); opacity: 0.09; }
          100% { transform: translateY(-105vh) scale(0.85); opacity: 0; }
        }
        @keyframes wobble {
          0%, 100% { transform: translateY(0px) rotate(-0.4deg); }
          50%       { transform: translateY(-9px) rotate(0.4deg); }
        }
        @keyframes headerIn {
          from { opacity: 0; transform: translateY(-22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ctaIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .headline-gradient {
          background: linear-gradient(135deg, #0D9488 0%, #4338CA 50%, #854D0E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          padding: '96px 16px 80px',
          overflow: 'hidden',
          background: 'linear-gradient(155deg, #F8FAFF 0%, #F0FDFA 45%, #FFFBEB 100%)',
        }}
      >
        <BgBubbles />

        {/* Header */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            marginBottom: 72,
            animation: 'headerIn 0.85s cubic-bezier(.22,1,.36,1) both',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              padding: '5px 18px',
              borderRadius: 999,
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 20,
              fontFamily: "'Lora', serif",
              background: 'rgba(13,148,136,0.10)',
              color: '#0D9488',
              border: '1px solid rgba(13,148,136,0.28)',
            }}
          >
            ✦ Crafted by Our Women Team ✦
          </span>

          <h2
            className="headline-gradient"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.8rem, 7vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 14,
            }}
          >
            Our Products
          </h2>

          <p
            style={{
              fontFamily: "'Lora', serif",
              fontStyle: 'italic',
              color: '#64748B',
              fontSize: '1.05rem',
              maxWidth: 480,
              margin: '0 auto 20px',
            }}
          >
            Each piece a story — woven with heart, skill &amp; tradition.
          </p>

          {/* Colour dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
            {products.map((p, i) => (
              <div
                key={i}
                style={{
                  width: i === 2 || i === 3 ? 26 : 8,
                  height: 5,
                  borderRadius: 99,
                  background: p.color,
                  transition: 'width 0.3s',
                  animation: `wobble ${2.2 + i * 0.18}s ${i * 0.08}s infinite ease-in-out`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Bubble Grid */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '60px 32px',
            justifyItems: 'center',
          }}
        >
          {products.map((product, index) => (
            <BubbleCard key={index} product={product} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            marginTop: 72,
            animation: 'ctaIn 0.9s 0.7s cubic-bezier(.22,1,.36,1) both',
          }}
        >
          <button
            style={{
              padding: '14px 42px',
              borderRadius: 999,
              background: 'linear-gradient(135deg, #0D9488, #4338CA)',
              color: '#fff',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '0.06em',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 28px rgba(67,56,202,0.35)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.04)';
              e.currentTarget.style.boxShadow = '0 18px 48px rgba(67,56,202,0.45)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(67,56,202,0.35)';
            }}
          >
            ✦ View Full Collection ✦
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductBubbleShowcase;