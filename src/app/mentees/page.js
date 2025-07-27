'use client';
import { useState } from 'react';
import { Users, Star, ArrowRight, CheckCircle, User, Mail, Phone, MapPin, Heart, Globe } from 'lucide-react';

const tabs = [
  { id: 'mentees', label: 'Mentees', gradient: 'from-purple-600 via-blue-600 to-indigo-700', accent: '#6366f1' },
  { id: 'mentors', label: 'Mentors', gradient: 'from-rose-500 via-pink-600 to-purple-700', accent: '#ec4899' }
];

const initialForm = {
  firstName: '',
  lastName: '',
  mobile: '',
  age: '',
  email: '',
  address: '',
  interest: '',
  citizen: ''
};

const Mentees = () => {
  const [activeTab, setActiveTab] = useState('mentees');
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log(`Submitted [${activeTab}]:`, formData);
    setSubmitted(true);
    setFormData(initialForm);
    setIsSubmitting(false);
    
    // Reset success state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const tabInfo = tabs.find(t => t.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 pt-12 pb-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-200 mb-6">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium text-slate-700">Join 10,000+ Community Members</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-indigo-700 to-purple-700 mb-6 leading-tight">
            Mentorship
            <br />
            <span className="text-4xl md:text-5xl">Community</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Connect with industry experts and passionate learners in our thriving mentorship ecosystem. 
            <br className="hidden md:block" />
            <span className="font-medium text-indigo-600">Growth begins with the right connections.</span>
          </p>
        </div>

        {/* Enhanced Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm p-2 rounded-2xl border border-white/50 shadow-xl">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 relative overflow-hidden group ${
                  activeTab === tab.id 
                    ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg transform scale-105` 
                    : 'text-slate-600 hover:text-slate-800 hover:bg-white/80'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {tab.id === 'mentees' ? <User className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                  {tab.label}
                </span>
                {activeTab !== tab.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Main Content */}
        <div className={`bg-gradient-to-br ${tabInfo.gradient} rounded-3xl shadow-2xl backdrop-blur-sm border border-white/20 overflow-hidden transition-all duration-700 transform hover:scale-[1.02]`}>
          
          {/* Success State */}
          {submitted && (
            <div className="absolute inset-0 bg-green-500/95 backdrop-blur-sm z-20 flex items-center justify-center rounded-3xl">
              <div className="text-center text-white">
                <CheckCircle className="w-16 h-16 mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold mb-2">Successfully Submitted!</h3>
                <p className="text-green-100">We'll get back to you soon.</p>
              </div>
            </div>
          )}

          <div className="p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Enhanced Left Content */}
              <div className="text-white space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  {activeTab === 'mentees' ? <Heart className="w-4 h-4 fill-white" /> : <Star className="w-4 h-4 fill-white" />}
                  <span className="text-sm font-medium">
                    {activeTab === 'mentees' ? 'Learn & Grow' : 'Share & Inspire'}
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black leading-tight">
                  Become a <br />
                  <span className="text-white/90">{tabInfo.label.slice(0, -1)}</span>
                </h2>
                
                <div className="space-y-4">
                  <p className="text-xl text-white/90 leading-relaxed">
                    {activeTab === 'mentees'
                      ? 'Unlock your potential with personalized guidance from industry leaders. Transform your career trajectory with expert insights and proven strategies.'
                      : 'Shape the future by sharing your expertise. Become a catalyst for change and help others achieve their dreams while building meaningful connections.'}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {(activeTab === 'mentees' 
                      ? ['1-on-1 Sessions', 'Career Guidance', 'Skill Development', 'Network Access']
                      : ['Impact Lives', 'Share Knowledge', 'Build Network', 'Give Back']
                    ).map((benefit, i) => (
                      <span key={i} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Form */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
                <div className="space-y-6">
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Join Now</h3>
                    <p className="text-slate-600">Fill in your details to get started</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <User className="absolute left-3 top-3 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                      <input 
                        name="firstName" 
                        placeholder="First Name" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-white/80 backdrop-blur-sm text-slate-800 placeholder-slate-400" 
                        required 
                      />
                    </div>
                    
                    <div className="relative group">
                      <User className="absolute left-3 top-3 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                      <input 
                        name="lastName" 
                        placeholder="Last Name" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-white/80 backdrop-blur-sm text-slate-800 placeholder-slate-400" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                      <input 
                        name="mobile" 
                        placeholder="Mobile Number" 
                        value={formData.mobile} 
                        onChange={handleChange} 
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-white/80 backdrop-blur-sm text-slate-800 placeholder-slate-400" 
                        required 
                      />
                    </div>
                    
                    <input 
                      name="age" 
                      placeholder="Age" 
                      value={formData.age} 
                      onChange={handleChange} 
                      className="px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-white/80 backdrop-blur-sm text-slate-800 placeholder-slate-400" 
                      required 
                    />
                  </div>

                  <div className="relative group">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                    <input 
                      name="email" 
                      type="email" 
                      placeholder="Email Address" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-white/80 backdrop-blur-sm text-slate-800 placeholder-slate-400" 
                      required 
                    />
                  </div>

                  <div className="relative group">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                    <input 
                      name="address" 
                      placeholder="Address" 
                      value={formData.address} 
                      onChange={handleChange} 
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-white/80 backdrop-blur-sm text-slate-800 placeholder-slate-400" 
                      required 
                    />
                  </div>

                  <input 
                    name="interest" 
                    placeholder="Area of Interest" 
                    value={formData.interest} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-white/80 backdrop-blur-sm text-slate-800 placeholder-slate-400" 
                    required 
                  />

                  <div className="relative group">
                    <Globe className="absolute left-3 top-3 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                    <input 
                      name="citizen" 
                      placeholder="Nationality" 
                      value={formData.citizen} 
                      onChange={handleChange} 
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-white/80 backdrop-blur-sm text-slate-800 placeholder-slate-400" 
                      required 
                    />
                  </div>

                  <button 
                    type="button" 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transform transition-all duration-300 hover:scale-105 focus:scale-105 flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'bg-slate-400 cursor-not-allowed' 
                        : `bg-gradient-to-r ${tabInfo.gradient} hover:shadow-xl`
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-8 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Secure & Private
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              Trusted by 10k+ Users
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" />
              Active Community
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentees;