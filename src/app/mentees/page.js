'use client';

import { useState, useEffect } from 'react';
import { Users, Star, ArrowRight, CheckCircle, User, Mail, Phone, MapPin, Heart, Globe } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const initialErrors = {
  firstName: false,
  lastName: false,
  mobile: false,
  email: false
};

const Mentees = () => {
  const [activeTab, setActiveTab] = useState('mentees');
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change if field has been touched
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let isValid = true;
    
    switch (name) {
      case 'firstName':
      case 'lastName':
        isValid = value.trim().length > 0;
        break;
      case 'mobile':
        isValid = /^[0-9]{10}$/.test(value);
        break;
      case 'email':
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        break;
      default:
        break;
    }
    
    setErrors(prev => ({ ...prev, [name]: !isValid }));
    return isValid;
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...initialErrors };
    const newTouched = { ...touched };

    // Validate required fields
    ['firstName', 'lastName', 'mobile', 'email'].forEach(field => {
      newTouched[field] = true;
      if (!validateField(field, formData[field])) {
        isValid = false;
      }
    });

    setTouched(newTouched);
    return isValid;
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setFormData(initialForm);
    setErrors(initialErrors);
    setTouched(initialErrors);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please correct the errors in the form');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      ...formData,
      type: activeTab === 'mentees' ? 'mentee' : 'mentor'
    };

    try {
      const res = await fetch("https://sheetdb.io/api/v1/1s8c08u7ykusx", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: payload }),
      });

      if (!res.ok) throw new Error('Failed to submit');

      setSubmitted(true);
      setFormData(initialForm);
      setErrors(initialErrors);
      setTouched(initialErrors);
      toast.success("Form submitted successfully!");

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const tabInfo = tabs.find(t => t.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 pt-12 pb-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
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

        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm p-2 rounded-2xl border border-white/50 shadow-xl">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
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

        <div className={`bg-gradient-to-br ${tabInfo.gradient} rounded-3xl shadow-2xl backdrop-blur-sm border border-white/20 overflow-hidden transition-all duration-700 transform hover:scale-[1.01]`}>
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

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Join Now</h3>
                    <p className="text-slate-600">Fill in your details to get started</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <input 
                        name="firstName" 
                        placeholder="First Name *" 
                        value={formData.firstName} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`input ${errors.firstName && touched.firstName ? 'border-red-500' : ''}`}
                      />
                      {errors.firstName && touched.firstName && (
                        <p className="text-red-500 text-xs">First name is required</p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <input 
                        name="lastName" 
                        placeholder="Last Name *" 
                        value={formData.lastName} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`input ${errors.lastName && touched.lastName ? 'border-red-500' : ''}`}
                      />
                      {errors.lastName && touched.lastName && (
                        <p className="text-red-500 text-xs">Last name is required</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <input 
                        name="mobile" 
                        placeholder="Mobile Number *" 
                        value={formData.mobile} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`input ${errors.mobile && touched.mobile ? 'border-red-500' : ''}`}
                      />
                      {errors.mobile && touched.mobile && (
                        <p className="text-red-500 text-xs">Valid 10-digit number required</p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <input 
                        name="age" 
                        placeholder="Age" 
                        value={formData.age} 
                        onChange={handleChange}
                        className="input"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <input 
                      name="email" 
                      type="email" 
                      placeholder="Email Address *" 
                      value={formData.email} 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`input ${errors.email && touched.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500 text-xs">Valid email required</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <input 
                      name="address" 
                      placeholder="Address" 
                      value={formData.address} 
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                  <div className="space-y-1">
                    <input 
                      name="interest" 
                      placeholder="Area of Interest" 
                      value={formData.interest} 
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                  <div className="space-y-1">
                    <input 
                      name="citizen" 
                      placeholder="Nationality" 
                      value={formData.citizen} 
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transform transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'bg-slate-400 cursor-not-allowed' 
                        : `bg-gradient-to-r ${tabInfo.gradient} hover:shadow-xl hover:brightness-110`
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
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-slate-500 text-sm">
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

      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid #e2e8f0;
          background-color: white;
          transition: all 0.2s;
          font-size: 0.95rem;
        }
        .input:focus {
          outline: none;
          border-color: ${tabInfo.accent};
          box-shadow: 0 0 0 2px ${tabInfo.accent}20;
        }
        .input::placeholder {
          color: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default Mentees;