"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Play, Volume2, VolumeX, Heart, Share, Sparkles, Zap, Users, Loader } from "lucide-react";

export default function ReelShowcase({ videos }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6, once: true });
  const controls = useAnimation();
  const [mutedStates, setMutedStates] = useState(videos.map(() => true));
  const [activeReel, setActiveReel] = useState(0);
  const [videoLoading, setVideoLoading] = useState(videos.map(() => true));

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const toggleMute = (index) => {
    setMutedStates(prev => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const handleVideoLoad = (index) => {
    setVideoLoading(prev => {
      const newLoading = [...prev];
      newLoading[index] = false;
      return newLoading;
    });
  };

  return (
    <section
      ref={ref}
      className="w-full min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * 1000,
              y: Math.random() * 1000,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Main Layout - 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center min-h-[80vh]">

          {/* Left Reel - Bigger Size with Hover Effects */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: {
                opacity: 0,
                x: -100,
                rotateY: -20,
                scale: 0.9
              },
              visible: {
                opacity: 1,
                x: 0,
                rotateY: 0,
                scale: 1,
                transition: {
                  duration: 1.2,
                  ease: "easeOut",
                  delay: 0.3
                },
              },
            }}
            whileHover={{
              x: -20,
              rotateY: -8,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="flex justify-center lg:justify-end perspective-1000"
          >
            <div className="relative w-[400px] transform-style-3d">
              {/* 3D Container */}
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl transform-style-3d group">
                {/* Glow Border */}
                <div className="absolute -inset-3 bg-gradient-to-br from-yellow-400/50 via-pink-500/50 to-purple-600/50 rounded-[46px] blur-2xl opacity-70 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-2xl border border-white/30 rounded-[40px] overflow-hidden">
                  {/* Loading Indicator */}
                  {videoLoading[0] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20 rounded-[40px]">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="text-white"
                      >
                        <Loader className="w-12 h-12" />
                      </motion.div>
                    </div>
                  )}

                  <video
                    src={videos[0]}
                    className="w-full h-full object-cover aspect-[9/16]"
                    playsInline
                    autoPlay
                    muted={mutedStates[0]}
                    loop
                    onLoadedData={() => handleVideoLoad(0)}
                    onLoadStart={() => setVideoLoading(prev => {
                      const newLoading = [...prev];
                      newLoading[0] = true;
                      return newLoading;
                    })}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Controls */}
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                      <div className="bg-black/60 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white/20">
                        <h3 className="text-white font-bold text-lg">Grand Opening</h3>
                        <p className="text-white/70 text-sm">Event Kickoff</p>
                      </div>
                      <div className="flex gap-2">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleMute(0)}
                          className="p-4 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/80 transition-all border border-white/20"
                        >
                          {mutedStates[0] ? (
                            <VolumeX className="w-6 h-6 text-white" />
                          ) : (
                            <Volume2 className="w-6 h-6 text-white" />
                          )}
                        </motion.button>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          className="p-4 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/80 transition-all border border-white/20"
                        >
                          <Heart className="w-6 h-6 text-white" />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-6 bg-black/50 backdrop-blur-sm rounded-full border border-white/20">
                      <Play className="w-10 h-10 text-white fill-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -25, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-400 rounded-full shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Center Content - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center lg:text-left order-first lg:order-none"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/40 rounded-2xl mb-10 backdrop-blur-sm"
            >
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white text-base font-bold tracking-wider">MIND OVER MILES 2025</span>
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight"
            >
              Relive
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                The Magic
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className={`text-gray-300 text-xl lg:text-2xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold tracking-wide`}
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "1.7rem",
                lineHeight: "2.4rem",
              }}
            >
              Experience the unforgettable journey of passion, energy, and celebration from our flagship event through immersive visual stories.
            </motion.p>


            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex justify-center lg:justify-start gap-10 mb-10"
            >
              <div className="text-center">
                <div className="flex items-center gap-3 text-white font-bold text-3xl mb-2">
                  <Users className="w-7 h-7 text-green-400" />
                  <span>2.4K+</span>
                </div>
                <p className="text-gray-400 text-base">Participants</p>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-3 text-white font-bold text-3xl mb-2">
                  <Share className="w-7 h-7 text-blue-400" />
                  <span>500+</span>
                </div>
                <p className="text-gray-400 text-base">Shares</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              <a
                href="https://www.instagram.com/orange_hub_events/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-4 hover:from-purple-500 hover:to-pink-500"
                >
                  <Play className="w-6 h-6" />
                  Watch All Highlights
                </motion.button>
              </a>


            </motion.div>
          </motion.div>

          {/* Right Reel - Bigger Size with Hover Effects */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: {
                opacity: 0,
                x: 100,
                rotateY: 20,
                scale: 0.9
              },
              visible: {
                opacity: 1,
                x: 0,
                rotateY: 0,
                scale: 1,
                transition: {
                  duration: 1.2,
                  ease: "easeOut",
                  delay: 0.3
                },
              },
            }}
            whileHover={{
              x: 20,
              rotateY: 8,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="flex justify-center lg:justify-start perspective-1000"
          >
            <div className="relative w-[400px] transform-style-3d">
              {/* 3D Container */}
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl transform-style-3d group">
                {/* Glow Border */}
                <div className="absolute -inset-3 bg-gradient-to-br from-blue-400/50 via-purple-500/50 to-pink-600/50 rounded-[46px] blur-2xl opacity-70 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-2xl border border-white/30 rounded-[40px] overflow-hidden">
                  {/* Loading Indicator */}
                  {videoLoading[1] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20 rounded-[40px]">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="text-white"
                      >
                        <Loader className="w-12 h-12" />
                      </motion.div>
                    </div>
                  )}

                  <video
                    src={videos[1]}
                    className="w-full h-full object-cover aspect-[9/16]"
                    playsInline
                    autoPlay
                    muted={mutedStates[1]}
                    loop
                    onLoadedData={() => handleVideoLoad(1)}
                    onLoadStart={() => setVideoLoading(prev => {
                      const newLoading = [...prev];
                      newLoading[1] = true;
                      return newLoading;
                    })}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Controls */}
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                      <div className="bg-black/60 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white/20">
                        <h3 className="text-white font-bold text-lg">Grand Finale</h3>
                        <p className="text-white/70 text-sm">Closing Ceremony</p>
                      </div>
                      <div className="flex gap-2">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleMute(1)}
                          className="p-4 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/80 transition-all border border-white/20"
                        >
                          {mutedStates[1] ? (
                            <VolumeX className="w-6 h-6 text-white" />
                          ) : (
                            <Volume2 className="w-6 h-6 text-white" />
                          )}
                        </motion.button>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          className="p-4 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/80 transition-all border border-white/20"
                        >
                          <Share className="w-6 h-6 text-white" />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-6 bg-black/50 backdrop-blur-sm rounded-full border border-white/20">
                      <Play className="w-10 h-10 text-white fill-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="absolute -bottom-4 -right-6 w-10 h-10 bg-pink-500 rounded-full shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 2 }}
        className="flex justify-center gap-4 mt-16"
      >
        {videos.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveReel(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${activeReel === index
              ? 'bg-white shadow-lg scale-125'
              : 'bg-white/40 scale-100'
              }`}
          />
        ))}
      </motion.div>

      {/* Add CSS for 3D perspective */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}