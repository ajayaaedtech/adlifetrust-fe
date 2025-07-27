"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Stethoscope, Briefcase, BookOpen, Users, MapPin, Calendar, Target, Brain } from 'lucide-react';
import Image from 'next/image';

const activities = [

  {
    id: 'livelihood',
    title: 'Livelihood',
    icon: Briefcase,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    images: [
      {
        id: 1,
        src: '/project.jpg',
        alt: 'Women learning tailoring skills'
      },

    ],
    paragraphs: [
      "AD Life Trust is deeply committed to enhancing livelihoods through skill development programs, with a focus on empowering suburban women. Over 30 batches, comprising 10 women each, were trained in Akiveedu, West Godavari district, mastering skills such as tailoring, embroidery, and handicraft making.",
      "Through its affiliated, AD Life Projects Pvt. Ltd., AD Life Trust established a transformative partnership with Brandix India Apparel City, providing training for women in garment manufacturing.",
      "This collaboration led to successful placements in various apparel units, aligning with industry needs. With a 3000 square feet training center, AD Life Trust has supported the program with experienced trainers, covering essential skills and holistic development"
    ]
  },
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    images: [
      {
        id: 1,
        src: '/boy2.png',
        alt: 'Children in classroom learning'
      }
    ],
    paragraphs: [
      "AD Life Trust is dedicated to transforming the lives of vulnerable children, particularly those born to sex workers. Facing challenges such as higher infant mortality and difficulty accessing education due to societal stigma, these children often struggle for opportunities. The trust has supported 12 children through bachelor's degrees, breaking the cycle of adversity and instilling confidence in their dreams.",
      "Addressing gender biases in education, AD Life Trust sponsored the initial fees for a deserving young woman pursuing a Ph.D., exemplifying its commitment to empowering individuals. The sponsored individual's success story, securing a higher-paying job aligned with her research, highlights the trust's philosophy of enabling self-sufficiency.",
    ]
  },
  {
    id: 'health',
    title: 'Health',
    icon: Stethoscope,
    color: 'from-red-500 to-pink-600',
    bgColor: 'bg-red-50',
    images: [
      {
        id: 1,
        src: '/c.jpg',
        alt: 'women gathered for a knowledge of healthcare camp organized by AD Life in Telangana.'
      },

    ],
    paragraphs: [
      "Ensuring good health is pivotal for a fulfilling life, yet India grapples with widespread health issues, including malnutrition, infant, and maternal mortality. Despite constitutional guarantees for free healthcare, over 70% of health expenses are borne by individuals, creating a significant financial burden.",
      "Recognizing this challenge, AD Life has focused its efforts on healthcare, particularly targeting tribal populations, constituting 7.95% of India's total population. Working in Telangana, AD Life has provided essential health services to 25,000 tribal individuals, collaborating with local gram panchayats in 30 villages. Medical camps facilitated access to general physicians, cardiologists, pediatricians, and gynecologists, benefitting 9,467 tribal members. Eye and dental camps further addressed specific health needs.",
    ]
  },
  {
    id: 'research',
    title: 'Research and Documentation',
    icon: Stethoscope,
    color: 'from-red-500 to-pink-600',
    bgColor: 'bg-red-50',
    images: [
      {
        id: 1,
        src: '/b.jpg',
        alt: ''
      },

    ],
    paragraphs: [
      "Ensuring good health is pivotal for a fulfilling life, yet India grapples with widespread health issues, including malnutrition, infant, and maternal mortality. Despite constitutional guarantees for free healthcare, over 70% of health expenses are borne by individuals, creating a significant financial burden.",
      "Recognizing this challenge, AD Life has focused its efforts on healthcare, particularly targeting tribal populations, constituting 7.95% of India's total population. Working in Telangana, AD Life has provided essential health services to 25,000 tribal individuals, collaborating with local gram panchayats in 30 villages. Medical camps facilitated access to general physicians, cardiologists, pediatricians, and gynecologists, benefitting 9,467 tribal members. Eye and dental camps further addressed specific health needs.",
    ]
  },
  {
    id: 'Mental-Health ',
    title: 'Mental Health ',
    icon: Brain,
    color: 'from-orange-500 to-oreange-600',
    bgColor: 'bg-red-50',
    images: [
      {
        id: 1,
        src: '/oranghub-events.JPG',
        alt: 'Upcoing event -  Mind Over Miles'
      },

    ],
    paragraphs: [
      " At Orange Hub Events, we believe mental health deserves the same attention and celebration as physical wellness. In today’s fast-paced world, mental well-being is often neglected or misunderstood — but it’s at the heart of how we live, work, connect, and grow.",
      "According to global studies, 1 in 4 people will experience mental health issues at some point in their lives. Yet the stigma surrounding mental health keeps millions from seeking help, speaking up, or even recognizing the signs.",
    ]
  }
];

const ImageDisplay = ({ images, title, color }) => {
  const currentImage = images[0]; // Show only first image

  return (
    <div className="relative h-full">
      {/* Single Image Display */}
      <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl bg-gray-200">
        {currentImage.src ? (
          <div className="w-full h-full relative">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-sm">
              {currentImage.alt}
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-2">📷</div>
              <p className="font-medium">Image coming soon</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ActivitySection = ({ activity, index, isReverse = false }) => {
  const IconComponent = activity.icon;

  return (
    <section className={`py-20 ${activity.bgColor}`}>
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReverse ? 'lg:grid-flow-col-dense' : ''}`}
        >
          {/* Images Section */}
          <div className={`${isReverse ? 'lg:col-start-2' : ''}`}>
            <ImageDisplay
              images={activity.images}
              title={activity.title}
              color={activity.color}
            />
          </div>

          {/* Content Section */}
          <div className={`${isReverse ? 'lg:col-start-1' : ''}`}>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 bg-gradient-to-r ${activity.color} text-white rounded-xl mr-4`}>
                  <IconComponent size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {activity.title}
                </h2>
              </div>
            </motion.div>

            {/* Three Paragraphs */}
            <div className="space-y-6">
              {activity.paragraphs.map((paragraph, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + (idx * 0.1) }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${activity.color} rounded-full`} />
                  <p className="text-gray-700 leading-relaxed text-lg pl-6">
                    {paragraph}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ImpactCard = ({ item, index }) => {
  const IconComponent = item.icon;

  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
        <IconComponent size={28} className="text-white" />
      </div>
      <div className="text-3xl font-bold text-gray-800 mb-2">{item.number}</div>
      <div className="text-gray-600 font-medium">{item.label}</div>
    </motion.div>
  );
};

const ActivitiesPage = () => {
  return (
    <div className="min-h-screen bg-white mt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900/70 via-indigo-900/70 to-purple-900/70 py-28 md:py-36 overflow-hidden"
        style={{
          backgroundImage: "url(/top.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}>

        {/* Additional background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/70 via-indigo-900/75 to-purple-900/70" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl" />
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8 text-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-10">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
              >
                <span className="text-yellow-300 font-medium text-sm tracking-wider">JOIN OUR MISSION</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">We Need Your </span>
                <span className="text-yellow-400 relative inline-block">
                  <span className="relative z-10">Help</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400/30 -z-0" style={{ transform: 'skewX(-15deg)' }} />
                </span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Creating sustainable change by empowering communities through education, healthcare, and livelihood programs.
              </p>
            </div>

            {/* Activity Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4  gap-6 max-w-4xl mx-auto mt-16 ">
              {[
                { icon: <GraduationCap size={38} className=''/>, label: "Education" },
                { icon: <Stethoscope size={38} />, label: "Healthcare" },
                { icon: <Briefcase size={38} />, label: "Livelihoods" },
                { icon: <BookOpen size={38} />, label: "Research" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex flex-col items-center group "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-20 h-20  bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-yellow-400/30 bg-yellow-400/10 group-hover:scale-105 border border-white/10 ">
                    {item.icon}
                  </div>
                  <span className="text-white font-medium tracking-wide text-sm sm:text-base">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a
                href="https://pages.razorpay.com/pl_NIXwYVaXickvmj/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base rounded-full transition-all duration-300 shadow-md"
              >
                GIVE NOW
                <span className="ml-2 text-lg">→</span>
              </a>

            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Activity Sections */}
      {activities.map((activity, index) => (
        <ActivitySection
          key={activity.id}
          activity={activity}
          index={index}
          isReverse={index % 2 === 1}
        />
      ))}

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="px-4 md:px-8 lg:px-16 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Your support enables us to continue transforming lives through education,
              livelihood development, and healthcare services. Together, we can create
              lasting change in communities that need it most.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/volunteer"  // Link to the volunteer page
                className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Volunteer
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesPage;