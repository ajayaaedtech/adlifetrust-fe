"use client";
import Empowerment from '@/components/Empowerment/Empowerment';
import { motion } from 'framer-motion';
import { Mail, User, Phone, MapPin, Globe, Award, Video } from 'lucide-react';

export default function VolunteerForm() {
    return (
        <section className="py-10 sm:mt-20  md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content (unchanged) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                            <Award className="w-4 h-4 mr-2" />
                            Join Our Volunteer Program
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            We’d love to hear from you
                        </h2>

                        <p className="text-lg text-gray-600">
                            We are launching a platform for this purpose “Speak with Ease”. On this platform, learners will register and converse with our volunteers (you) and enhance their inter-personal communication skills. The volunteers will be benefitted as they will be provided with badges and they could share their contributions made in the change of life for the kids and young adults.

                        </p>
                        <p class="text-lg text-gray-600">
                            To join, you need a stable internet connection, laptop/PC with webcam and mic, good communication skills, and enthusiasm. Enjoy badges and appreciation letters as rewards.


                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Video className="w-4 h-4 text-blue-600" />
                                    </div>
                                </div>
                                <div className="ml-3">
                                    <h4 className="font-medium text-gray-900">Speak with Professionals</h4>
                                    <p className="text-gray-600 text-sm">
                                        Barristers will register and converse with volunteers to improve communication skills.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Award className="w-4 h-4 text-blue-600" />
                                    </div>
                                </div>
                                <div className="ml-3">
                                    <h4 className="font-medium text-gray-900">Earn Recognition</h4>
                                    <p className="text-gray-600 text-sm">
                                        Receive badges and appreciation letters for your contributions.
                                    </p>
                                </div>
                            </div>

                           
                        </div>
                    </motion.div>
                    {/* ... */}

                    {/* Right Column - Updated Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="p-8 sm:p-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Application</h3>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                                            First Name
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <User className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                id="first-name"
                                                name="first-name"
                                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Enter first name"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Last Name
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <User className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                id="last-name"
                                                name="last-name"
                                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Enter last name"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                                        Mobile Number
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Phone className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="tel"
                                            id="mobile"
                                            name="mobile"
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Enter mobile number"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        E-Mail
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Enter email address"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                        Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <MapPin className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Enter full address"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                                        City
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <MapPin className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Enter city"
                                            required
                                        />
                                    </div>
                                </div>



                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                                    >
                                        Submit Application
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
                <Empowerment/>
            </div>
        </section>
    );
}