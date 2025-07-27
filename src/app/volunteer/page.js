"use client";
import { useState } from "react";
import Empowerment from "@/components/Empowerment/Empowerment";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  User,
  Phone,
  MapPin,
  Award,
  Video,
  Loader2,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OurMission from "@/components/OurMission/OurMission";
import { Dot } from 'lucide-react';

export default function VolunteerForm() {
  const initialForm = {
    "First Name": "",
    "Last Name": "",
    "Mobile Number": "",
    "E-Mail": "",
    "Address": "",
    "City": "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = `${field} is required`;
      }
    }

    if (!/^\d{10}$/.test(formData["Mobile Number"])) {
      newErrors["Mobile Number"] = "Enter a valid 10-digit mobile number";
    }

    if (
      formData["E-Mail"] &&
      !/^\S+@\S+\.\S+$/.test(formData["E-Mail"])
    ) {
      newErrors["E-Mail"] = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue =
      name === "Mobile Number" ? value.replace(/\D/g, "") : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://sheetdb.io/api/v1/6g903rohsrpe9",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: formData }),
        }
      );

      if (response.ok) {
        toast.success("Application submitted successfully!");
        setStatusMessage("Your application has been submitted.");
        setFormSubmitted(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again!");
      setStatusMessage("There was an error submitting your application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-10 mt-30   bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ToastContainer />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  ">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 mt-18 sm:mt-0 md:mt-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4 mr-2" />
              Join Our Volunteer Program
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              We’d love to hear from you
            </h2>

            <p className="text-lg text-gray-600">
              We&apos;re launching “Speak with Ease” to help learners improve
              communication. You’ll earn badges and appreciation letters.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Video className="w-4 h-4 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">
                    Speak with Professionals
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Help learners gain confidence through real conversations.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">
                    Earn Recognition
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Get badges and appreciation letters for your contributions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">
                    Boost Your Portfolio
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Add volunteering experience, appreciation letters, and communication skills to your resume.

                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Dot className="w-4 h-4 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">
                    Empower Others
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Make a difference in someone’s journey to fluency by simply talking to them.

                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Dot className="w-4 h-4 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">
                    Join a Global Mission

                  </h4>
                  <p className="text-gray-600 text-sm">
                    Be part of a community that believes communication is a right, not a privilege.


                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden w-full"
          >
            <div className="p-8 sm:p-10">
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Volunteer Application
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <InputField
                        label="First Name"
                        name="First Name"
                        icon={<User />}
                        value={formData["First Name"]}
                        onChange={handleChange}
                        error={errors["First Name"]}
                      />
                      <InputField
                        label="Last Name"
                        name="Last Name"
                        icon={<User />}
                        value={formData["Last Name"]}
                        onChange={handleChange}
                        error={errors["Last Name"]}
                      />
                    </div>

                    <InputField
                      label="Mobile Number"
                      name="Mobile Number"
                      icon={<Phone />}
                      value={formData["Mobile Number"]}
                      onChange={handleChange}
                      error={errors["Mobile Number"]}
                      type="tel"
                    />
                    <InputField
                      label="E-Mail"
                      name="E-Mail"
                      icon={<Mail />}
                      value={formData["E-Mail"]}
                      onChange={handleChange}
                      error={errors["E-Mail"]}
                      type="email"
                    />
                    <InputField
                      label="Address"
                      name="Address"
                      icon={<MapPin />}
                      value={formData["Address"]}
                      onChange={handleChange}
                      error={errors["Address"]}
                    />
                    <InputField
                      label="City"
                      name="City"
                      icon={<MapPin />}
                      value={formData["City"]}
                      onChange={handleChange}
                      error={errors["City"]}
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center items-center gap-2 py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="thank-you"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-20"
                  >
                    <h3 className="text-3xl font-bold text-blue-600 mb-4">
                      🎉 Thank You!
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Your application has been received.
                      <br />
                      We’ll be in touch with you soon.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
        {/* <Empowerment className="" /> */}
        <OurMission />
      </div>
    </section>
  );
}

// InputField with error and icon
function InputField({ label, name, icon, value, onChange, error, type = "text" }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`block w-full pl-10 pr-3 py-3 border ${error ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
          placeholder={`Enter ${label.toLowerCase()}`}
          aria-invalid={error ? "true" : "false"}
        />
      </div>
      {error && (
        <small className="text-red-500 text-sm block mt-1">{error}</small>
      )}
    </div>
  );
}
