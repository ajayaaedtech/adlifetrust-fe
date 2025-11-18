"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Volume2, VolumeX, Heart, Share, Loader, Zap, Sparkles, Users } from "lucide-react";

export default function ReelShowcase({ videos = [] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once: true });

  const [muted, setMuted] = useState(videos.map(() => true));
  const [loading, setLoading] = useState(videos.map(() => true));

  const toggleMute = (i) => {
    const newState = [...muted];
    newState[i] = !newState[i];
    setMuted(newState);
  };

  const onLoaded = (i) => {
    const newLoad = [...loading];
    newLoad[i] = false;
    setLoading(newLoad);
  };

  /** reel component WITHOUT animations */
  const ReelCard = (src, index, title, subtitle) => {
    return (
      <div className="flex justify-center w-full">
        <div className="relative w-full max-w-[360px] rounded-2xl">

          {/* Loader */}
          {loading[index] && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-30 rounded-2xl">
              <Loader className="w-10 h-10 text-white animate-spin" />
            </div>
          )}

          {/* Frame */}
          <div className="w-full aspect-[9/16] bg-black rounded-2xl overflow-hidden relative">

            {/* SAFE VIDEO (NO CUTTING) */}
            <video
              src={src}
              className="w-full h-full object-contain bg-black"
              autoPlay
              playsInline
              loop
              muted={muted[index]}
              preload="metadata"
              onLoadedData={() => onLoaded(index)}
            />

            {/* Bottom Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">

              {/* Info Box */}
              <div className="bg-black/60 px-4 py-2 rounded-xl text-white text-sm backdrop-blur-sm border border-white/10">
                <div className="font-bold">{title}</div>
                <div className="text-white/70 text-xs">{subtitle}</div>
              </div>

              <div className="flex gap-2">

                {/* Mute */}
                <button
                  onClick={() => toggleMute(index)}
                  className="p-3 bg-black/60 rounded-full border border-white/10"
                >
                  {muted[index] ? (
                    <VolumeX className="w-5 h-5 text-white" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-white" />
                  )}
                </button>

                {/* Like */}
                <button className="p-3 bg-black/60 rounded-full border border-white/10">
                  <Heart className="w-5 h-5 text-white" />
                </button>
              </div>

            </div>

            {/* Play icon center (static) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="p-4 rounded-full bg-black/40 border border-white/10">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={ref}
      className="w-full min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* GRID — MOBILE 1COL — LG 3COL */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* LEFT REEL */}
          {videos[0] &&
            ReelCard(videos[0], 0, "Grand Opening", "Event Kickoff")}

          {/* CENTER CONTENT */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10 mb-8">
              <Zap className="text-yellow-400 w-5 h-5" />
              <span className="font-semibold tracking-wide">
                MIND OVER MILES 2025
              </span>
              <Sparkles className="text-yellow-400 w-5 h-5" />
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Relive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">
                The Magic
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg max-w-md mx-auto lg:mx-0 mb-10">
              Experience the unforgettable journey through immersive reels from our flagship event.
            </p>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-10 mb-10">
              <div className="text-center">
                <div className="flex items-center gap-3 text-white text-3xl font-bold">
                  <Users className="text-green-400" />
                  2.4K+
                </div>
                <p className="text-gray-400">Participants</p>
              </div>

              <div className="text-center">
                <div className="flex items-center gap-3 text-white text-3xl font-bold">
                  <Share className="text-blue-400" />
                  500+
                </div>
                <p className="text-gray-400">Shares</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://www.instagram.com/orange_hub_events/"
              target="_blank"
              className="inline-block"
            >
              <button className="px-10 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 font-bold shadow-lg">
                <span className="flex items-center gap-3">
                  <Play className="w-6 h-6" />
                  Watch All Highlights
                </span>
              </button>
            </a>

          </div>

          {/* RIGHT REEL */}
          {videos[1] &&
            ReelCard(videos[1], 1, "Grand Finale", "Closing Ceremony")}

        </div>
      </div>
    </section>
  );
}
