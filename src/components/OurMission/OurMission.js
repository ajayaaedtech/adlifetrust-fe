import React from 'react';
import { Heart, Users, GraduationCap, Shield, FileText, HandHeart } from 'lucide-react';

const OurMission = () => {
  const missionItems = [
    {
      icon: Heart,
      title: "Health and Nutrition",
      description: "We promote health and nutrition through targeted initiatives, ensuring a brighter, healthier future for all.",
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: Users,
      title: "Livelihoods & Market Linkages", 
      description: "We foster livelihoods and strengthen market linkages, empowering communities for sustainable economic growth.",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    ,
    {
      icon: HandHeart,
      title: "Mental Health Activities",
      description: "We actively engage in relief activities to provide immediate assistance and support to those in crisis.",
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600"
    },
    {
      icon: GraduationCap,
      title: "Access to Education",
      description: "We are dedicated to expanding access to education, including higher education, to unlock the full potential of future generations.",
      color: "from-green-500 to-emerald-600", 
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Shield,
      title: "Empowering Vulnerable People",
      description: "We empower vulnerable people, providing them with the tools and opportunities needed to thrive and lead fulfilling lives.",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: FileText,
      title: "Research & Documentation",
      description: "We are committed to advancing knowledge through rigorous research and documentation efforts, driving informed decision-making and positive change.",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50", 
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl mb-6 shadow-lg">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl font-semibold text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Transforming Lives, Building Futures
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Through our comprehensive approach, we create lasting positive impact in communities across India
          </p>
        </div>

        {/* Mission Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missionItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl ${item.bgColor} border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden`}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${item.bgColor} border-2 border-white shadow-md mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-7 h-7 ${item.iconColor}`} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Decorative corner element */}
                <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/50">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-gray-700 font-medium">
              Join us in creating meaningful change
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;