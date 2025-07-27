import React from 'react';
import { BookOpen, HeartPulse, Briefcase, ArrowRight, Heart, Users, Smile, HandHeart, Globe, ShieldCheck } from 'lucide-react';

const Empowerment = () => {
  const features = [
    {
      icon: <BookOpen className="w-5 h-5 text-white" />,
      title: "Education & Learning",
      description: "Building bright futures through quality education and skill development programs.",
      color: "bg-blue-500",
      stats: "2,500+ Children"
    },
    {
      icon: <HeartPulse className="w-5 h-5 text-white" />,
      title: "Healthcare & Nutrition", 
      description: "Essential medical care and nutritional support for healthier communities.",
      color: "bg-green-500",
      stats: "15,000+ Families"
    },
    {
      icon: <Briefcase className="w-5 h-5 text-white" />,
      title: "Livelihood Support",
      description: "Vocational training and sustainable income opportunities.",
      color: "bg-orange-500",
      stats: "800+ Entrepreneurs"
    }
  ];

  const impactStats = [
    { value: "18K+", label: "Lives Impacted", icon: <Users className="w-5 h-5 text-blue-600" /> },
    { value: "120+", label: "Communities", icon: <Globe className="w-5 h-5 text-green-600" /> },
    { value: "95%", label: "Success Rate", icon: <ShieldCheck className="w-5 h-5 text-orange-600" /> },
  ];

  return (
    <section className="bg-gradient-to-b from-orange-50 to-blue-50 py-12 md:py-16 relative overflow-hidden mt-20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-40 h-40 bg-orange-200 rounded-full blur-[60px]"></div>
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-blue-200 rounded-full blur-[60px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center px-3 py-1.5 bg-orange-100 rounded-full mb-3">
            <HandHeart className="w-4 h-4 text-orange-600 mr-1.5" />
            <span className="text-orange-700 font-medium text-xs">Making a Difference</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-tight">
            Empowering <span className="text-orange-500">Lives</span>,<br />
            Enriching <span className="text-orange-500">Futures</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Every individual deserves hope, opportunity, and dignity
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Visual Component */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[320px] md:h-[400px] rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-orange-100 to-blue-100">
              {/* Main Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/80 via-yellow-400/80 to-green-400/80"></div>
              
              {/* Community Elements */}
              <div className="absolute inset-0 p-4">
                {/* Education Card */}
                <div className="absolute top-4 left-4 w-28 h-20 bg-white/90 rounded-lg p-2 shadow-sm transform hover:scale-105 transition-all duration-300 border border-white/50">
                  <div className="flex items-center justify-between mb-1">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <BookOpen className="w-3 h-3 text-white" />
                    </div>
                    <Smile className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">Education</div>
                    <div className="text-xs text-gray-600">Building Dreams</div>
                  </div>
                </div>
                
                {/* Health Card */}
                <div className="absolute top-20 right-4 w-24 h-20 bg-white/90 rounded-lg p-2 shadow-sm transform hover:scale-105 transition-all duration-300 border border-white/50">
                  <div className="text-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-1">
                      <HeartPulse className="w-3 h-3 text-white" />
                    </div>
                    <div className="text-sm font-medium text-gray-800">Healthcare</div>
                    <div className="text-xs text-gray-600">Healing Communities</div>
                  </div>
                </div>
                
                {/* Livelihood Card */}
                <div className="absolute bottom-4 left-6 w-32 h-20 bg-white/90 rounded-lg p-2 shadow-sm transform hover:scale-105 transition-all duration-300 border border-white/50">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <Briefcase className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">Livelihoods</div>
                      <div className="text-xs text-gray-600">Sustainable Futures</div>
                    </div>
                  </div>
                </div>
                
                {/* Impact Card */}
                <div className="absolute bottom-8 right-8 w-24 h-24 bg-white/90 rounded-full p-2 shadow-sm flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 border border-white/50">
                  <Users className="w-5 h-5 text-blue-600 mb-1" />
                  <div className="text-md font-bold text-gray-800">18K+</div>
                  <div className="text-xs text-gray-600">Lives Touched</div>
                </div>
              </div>

              {/* Central Symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/80 rounded-full border border-white/60 flex items-center justify-center shadow-md">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:col-span-6 space-y-5">
            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {impactStats.map((stat, index) => (
                <div key={index} className="bg-white/80 rounded-lg p-3 shadow-sm text-center">
                  <div className="flex justify-center mb-1">{stat.icon}</div>
                  <div className="text-lg font-bold text-gray-800">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Features */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group bg-white/80 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-white/50"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center shadow-sm`}>
                      {feature.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                        <h4 className="text-base font-semibold text-gray-800">{feature.title}</h4>
                        <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs text-gray-600 font-medium">
                          {feature.stats}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button className="group flex-1 flex items-center justify-center px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow-sm hover:shadow transition-all duration-200">
                Join Our Mission
                <Heart className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              </button>
              <button className="group flex-1 flex items-center justify-center px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg shadow-sm hover:shadow transition-all duration-200 border border-gray-200">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empowerment;