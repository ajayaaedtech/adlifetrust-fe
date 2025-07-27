'use client';
import { BookOpenText, Users, GraduationCap, Briefcase, ShieldCheck, MapPin } from 'lucide-react';

const Information = () => {
    return (
        <div className="bg-white mt-20">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About AD Life Trust</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Registered under the Indian Trusts Act, we are committed to creating sustainable change through education, healthcare, and community development.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Registration Info */}
                <div className="bg-blue-50 rounded-2xl p-8 mb-16 shadow-sm">
                    <div className="flex items-center mb-6">
                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <ShieldCheck className="h-8 w-8 text-blue-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Registration Information</h2>
                    </div>
                    <div className="prose prose-lg text-gray-700 max-w-4xl">
                        <p>
                            The trust is registered under the Indian Trusts Act, 1982 with Sub Registrar at Kempti, Ringsboro since January 3rd, 2005.
                        </p>
                    </div>
                </div>

                {/* Trustees Profile */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Trustees</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* K Dolly Profile */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:scale-[1.02]">
                            <div className="p-8">
                                <div className="flex items-start mb-6">
                                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                                        <Briefcase className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">K Dolly</h3>
                                        <p className="text-blue-600 font-medium">XIM Bhubaneswar Graduate</p>
                                    </div>
                                </div>
                                <div className="prose prose-lg text-gray-700">
                                    <p>
                                        Brings nearly two decades of experience in project and stakeholder management within the development sector. Leads projects funded by:
                                    </p>
                                    <ul className="mt-4 space-y-2">
                                        <li className="flex">
                                            <span className="text-blue-500 mr-2">•</span>
                                            <span>Government of India</span>
                                        </li>
                                        <li className="flex">
                                            <span className="text-blue-500 mr-2">•</span>
                                            <span>Government of Andhra Pradesh</span>
                                        </li>
                                        <li className="flex">
                                            <span className="text-blue-500 mr-2">•</span>
                                            <span>Bill & Melinda Gates Foundation</span>
                                        </li>
                                        <li className="flex">
                                            <span className="text-blue-500 mr-2">•</span>
                                            <span>DFID (UK)</span>
                                        </li>
                                    </ul>
                                    <p className="mt-4 font-medium">
                                        Specializes in Strategic Planning, Concept Marketing, Programme Management, and Fund Raising.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Ajay Reddy Profile */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:scale-[1.02]">
                            <div className="p-8">
                                <div className="flex items-start mb-6">
                                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                                        <Users className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">Ajay Reddy</h3>
                                        <p className="text-blue-600 font-medium">Commerce Graduate</p>
                                    </div>
                                </div>
                                <div className="prose prose-lg text-gray-700">
                                    <p>
                                        A dynamic professional deeply empathetic to farmers, tribes, and women's issues. From a young age, he has actively addressed tribal concerns through:
                                    </p>
                                    <div className="mt-4 bg-blue-50 rounded-lg p-6">
                                        <div className="flex items-center mb-3">
                                            <GraduationCap className="h-5 w-5 text-blue-600 mr-2" />
                                            <span className="font-medium">Providing scholarships</span>
                                        </div>
                                        <div className="flex items-center mb-3">
                                            <ShieldCheck className="h-5 w-5 text-blue-600 mr-2" />
                                            <span className="font-medium">Mobilizing funds for health emergencies</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Briefcase className="h-5 w-5 text-blue-600 mr-2" />
                                            <span className="font-medium">Former project coordinator at HEPPT</span>
                                        </div>
                                    </div>
                                    <p className="mt-4">
                                        Known for his motivational and mobilization skills, notably forming a team of 300 tribal youth in Telangana.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Advisors Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Strategic Advisors</h2>

                    {/* Professor DVR Seshadri */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 border border-gray-100 transition-transform hover:scale-[1.01]">
                        <div className="p-8">
                            <div className="flex flex-col md:flex-row md:items-center mb-6">
                                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                                    <Briefcase className="h-10 w-10 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Professor DVR Seshadri</h3>
                                    <p className="text-blue-600 font-medium">Clinical Professor of Marketing, Indian School of Business</p>
                                </div>
                            </div>
                            <div className="prose prose-lg text-gray-700">
                                <p>
                                    Boasts extensive leadership and teaching experience at IIM Bangalore, IIM Ahmedabad, and ISB. With a rich background in consulting for renowned Indian and international companies like Tata and L&T.
                                </p>
                                <div className="mt-4 bg-blue-50 rounded-lg p-4">
                                    <h4 className="font-semibold text-blue-800 mb-2">Pro-Bono Advisory Roles:</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>DHAN Foundation</li>
                                        <li>Aravind Eye Care System</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Professor Prakash Satyavageswaran */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 border border-gray-100 transition-transform hover:scale-[1.01]">
                        <div className="p-8">
                            <div className="flex flex-col md:flex-row md:items-center mb-6">
                                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                                    <BookOpenText className="h-10 w-10 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Professor Prakash Satyavageswaran</h3>
                                    <p className="text-blue-600 font-medium">Assistant Professor of Marketing, IIM Udaipur</p>
                                </div>
                            </div>
                            <div className="prose prose-lg text-gray-700">
                                <p>
                                    Brings diverse experience from non-profits to corporates, including Unilever. His research focuses on rural markets, low-income producers, and marketing interventions for behavior change.
                                </p>
                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <h4 className="font-semibold text-blue-800 mb-2">Advisory Roles:</h4>
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Aurolab</li>
                                            <li>Karma Healthcare</li>
                                            <li>Deshpande Foundation</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <h4 className="font-semibold text-blue-800 mb-2">Board Membership:</h4>
                                        <p>IMU Incubation Centre</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Expertise Highlights */}
                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="p-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                                    Rural Market Expertise
                                </h3>
                                <p className="text-gray-600">
                                    Our advisors bring specialized knowledge in rural markets and low-income consumer behavior, helping shape interventions that drive meaningful change in underserved communities.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="p-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <Briefcase className="h-6 w-6 text-blue-600 mr-3" />
                                    Corporate-Nonprofit Bridge
                                </h3>
                                <p className="text-gray-600">
                                    With experience spanning both corporate and nonprofit sectors, our advisors help translate business strategies into social impact initiatives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 my-10">
                    <div className="p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Training and Communication</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Dr. V Sharrah */}
                            <div className="bg-blue-50 rounded-xl p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Dr. V Sharrah</h3>
                                </div>
                                <div className="prose text-gray-700">
                                    <p className="mb-4">
                                        A communication expert and veteran of All India Radio who has designed, implemented and evaluated the communications component of healthcare projects.
                                    </p>
                                    <div className="bg-white rounded-lg p-4 mb-4">
                                        <h4 className="font-semibold text-blue-800 mb-2">Key Experience:</h4>
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Secondment at Commissionerate of Family Welfare, Government of Andhra Pradesh</li>
                                            <li>Holds two PhDs in communication fields</li>
                                        </ul>
                                    </div>
                                    <p className="font-medium">
                                        Acknowledged expert in the use of media for healthcare communication.
                                    </p>
                                </div>
                            </div>

                            {/* Elizabeth Kuruvilla */}
                            <div className="bg-blue-50 rounded-xl p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Elizabeth Kuruvilla</h3>
                                </div>
                                <div className="prose text-gray-700">
                                    <p className="mb-4">
                                        An experienced professional proficient in Graphic Design, Fashion and product management with a pro-active and hands-on approach.
                                    </p>
                                    <div className="bg-white rounded-lg p-4 mb-4">
                                        <h4 className="font-semibold text-blue-800 mb-2">Key Skills:</h4>
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Proven interpersonal and problem-solving skills</li>
                                            <li>Detail-oriented with global outlook</li>
                                            <li>Ability to translate market trends into innovative products</li>
                                        </ul>
                                    </div>
                                    <p className="font-medium">
                                        Graduate of the National Institute of Fashion Technology, Delhi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to learn more about our work?</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Explore how we're making a difference in communities through education, healthcare, and livelihood programs.
                    </p>
                    <a
                        href="/information"
                        className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    >
                        Visit Our Full Information Page
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Information;