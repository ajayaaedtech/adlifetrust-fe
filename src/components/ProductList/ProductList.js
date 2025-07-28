'use client';

import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    title: 'Garments',
    image: '/product/bag.png',
    alt: 'Woman in red polka dot dress',
    description: 'Wide range of hand crafted garments available for wholesale and retail.'
  },
  {
    title: 'Bags and accessories',
    image: '/product/cute-bag.png',
    alt: 'Collection of colorful bags and accessories',
    description: 'Trendy wallets, tote bags, laptop bags and more. Our collection features premium materials and unique designs that stand out from mass-produced alternatives. Each piece is carefully crafted by skilled artisans using sustainable materials whenever possible.'
  },
  {
    title: 'Bulk bags',
    image: '/product/small-bag.png',
    alt: 'Decorative bulk bags',
    description: 'Select from our catalogues for your requirement of bags for training programs, corporate gifting or return gifts.'
  },
  {
    title: 'Stitching and Embroidery job work',
    image: '/product/dress.png',
    alt: 'Person working on embroidery',
    description: 'Garment and accessory designers can source professional hand embroidery, pattern making and tailoring services from our skilled artisans. We offer custom designs and bulk order discounts for commercial clients.'
  },
  {
    title: 'Newspaper bags',
    image: '/product/cardboard.jpg',
    alt: 'Eco-friendly newspaper bags',
    description: 'Go green with our hand made newspaper bags for your return gifts and for packaging.'
  },
  {
    title: 'Bangles',
    image: '/product/bangles.jpg',
    alt: 'Handcrafted bangles',
    description: 'Discover our beautiful and traditional handmade bangles. Each piece is carefully crafted using techniques passed down through generations, making them unique works of wearable art.'
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ProductCard = ({ product, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsExpand, setNeedsExpand] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      // Calculate if text exceeds 3 lines (approx 4.5rem height)
      const lineHeight = 24; // Approximate line height in pixels
      const maxLines = 3;
      const maxHeight = lineHeight * maxLines;
      
      // Check if content exceeds 3 lines
      setNeedsExpand(descriptionRef.current.scrollHeight > maxHeight);
    }
  }, [product.description]);

  const toggleExpand = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeIn}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-lg text-center font-medium text-white tracking-wide bg-orange-400 p-2 rounded-sm">{product.title}</h3>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center p-6">
        <div className="w-full flex flex-col items-center justify-center flex-grow overflow-hidden">
          <div 
            ref={descriptionRef}
            className={`text-gray-200 italic font-light text-center ${
              needsExpand && !isExpanded ? 'line-clamp-3' : ''
            }`}
            style={{
              maxHeight: needsExpand && !isExpanded ? '4.5rem' : 'none'
            }}
          >
            {product.description}
          </div>
        </div>

        {/* Conditional button/border rendering */}
        {needsExpand ? (
          <button 
            onClick={toggleExpand}
            className={`px-4 py-1 text-sm font-medium transition-colors duration-200 ${
              isExpanded ? 'text-amber-400 border-t border-amber-400 w-full' : 'text-amber-400'
            }`}
          >
            {isExpanded ? 'Show Less' : 'Load More'}
          </button>
        ) : (
          <div className="w-full border-t border-amber-400/30 mt-2"></div>
        )}
      </div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light tracking-wide text-gray-900 mb-4">Our Products</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 bg-gray-900 text-white font-medium tracking-wide rounded-md hover:bg-amber-600 transition-all duration-300">
            View Full Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;