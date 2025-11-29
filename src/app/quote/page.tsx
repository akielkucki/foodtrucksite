"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    // Contact Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",

    // Project Info
    projectType: "",
    timeline: "",
    budget: "",

    // Food Truck Details
    truckType: "",
    menuType: "",
    equipmentNeeds: [] as string[],

    // Additional Info
    description: "",
    hasVehicle: "",
    hearAbout: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      equipmentNeeds: checked
        ? [...prev.equipmentNeeds, value]
        : prev.equipmentNeeds.filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-8">
        <div className="relative h-[300px] w-full overflow-hidden bg-[#EDEDED]">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#8A8A8A]/20 to-[#8A8A8A]/10">
            <div className="text-center text-[#8A8A8A]">
              <p className="text-sm">Quote hero image</p>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
            <div className="mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Get a <span className="text-[#F5A623]">Quote</span>
                </h1>
                <p className="mt-4 text-lg leading-8 text-white/90">
                  Tell us about your project and we'll provide a detailed estimate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="w-full bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-[#2F2F2F]">
                Contact Information
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-[#2F2F2F]">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-[#EDEDED] bg-white px-4 py-3 text-[#2F2F2F] focus:border-[#D6452F] focus:outline-none focus:ring-2 focus:ring-[#D6452F]/20"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-[#2F2F2F]">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-[#EDEDED] bg-white px-4 py-3 text-[#2F2F2F] focus:border-[#D6452F] focus:outline-none focus:ring-2 focus:ring-[#D6452F]/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#2F2F2F]">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-[#EDEDED] bg-white px-4 py-3 text-[#2F2F2F] focus:border-[#D6452F] focus:outline-none focus:ring-2 focus:ring-[#D6452F]/20"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#2F2F2F]">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-[#EDEDED] bg-white px-4 py-3 text-[#2F2F2F] focus:border-[#D6452F] focus:outline-none focus:ring-2 focus:ring-[#D6452F]/20"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-[#2F2F2F]">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-[#EDEDED] bg-white px-4 py-3 text-[#2F2F2F] focus:border-[#D6452F] focus:outline-none focus:ring-2 focus:ring-[#D6452F]/20"
                  />
                </div>
              </div>
            </div>

            {/* Project Information */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-[#2F2F2F]">
                Project Information
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-[#2F2F2F]">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-[#EDEDED] bg-white px-4 py-3 text-[#2F2F2F] focus:border-[#D6452F] focus:outline-none focus:ring-2 focus:ring-[#D6452F]/20"
                  >
                    <option value="">Select...</option>
                    <option value="new-build">New Custom Build</option>
                    <option value="renovation">Renovation/Upgrade</option>
                    <option value="parts">Parts Purchase</option>
                    <option value="consultation">Consultation Only</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-[#2F2F2F]">
                    Desired Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-[#EDEDED] bg-white px-4 py-3 text-[#2F2F2F] focus:border-[#D6452F] focus:outline-none focus:ring-2 focus:ring-[#D6452F]/20"
                  >
                    <option value="">Select...</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 Months</option>
                    <option value="3-6-months">3-6 Months</option>
                    <option value="6-12-months">6-12 Months</option>
                    <option value="planning">Just Planning</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="mb-2 block text-sm font-medium text-[#2F2F2F]">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-[#EDEDED] bg-white px-4 py-3 text-[#2F2F2F] focus:border-[#D6452F] focus:outline-none focus:ring-2 focus:ring-[#D6452F]/20"
                  >
                    <option value="">Select...</option>
                    <option value="under-50k">Under $50,000</option>
                    <option value="50-75k">$50,000 - $75,000</option>
                    <option value="75-100k">$75,000 - $100,000</option>
                    <option value="100-150k">$100,000 - $150,000</option>
                    <option value="150k-plus">$150,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="hasVehicle" className="mb-2 block text-sm font-medium text-[#2F2F2F]">
                    Do you have a vehicle? *
                  </label>
                  <select
                    id="hasVehicle"
                    name="hasVehicle"
                    value={formData.hasVehicle}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-[#EDEDED] bg-white px-4 py-3 text-[#2F2F2F] focus:border-[#D6452F] focus:outline-none focus:ring-2 focus:ring-[#D6452F]/20"
                  >
                    <option value="">Select...</option>
                    <option value="yes">Yes, I have a vehicle</option>
                    <option value="no">No, I need a vehicle</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Food Truck Details */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-[#2F2F2F]">
                Food Truck Details
              </h2>
              <div className="grid gap-6">
                <div>
                  <label htmlFor="truckType" className="mb-2 block text-sm font-medium text-[#2F2F2F]">
                    Truck Size Preference
                  </label>
                  <select
                    id="truckType"
                    name="truckType"
                    value={formData.truckType}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-[#EDEDED] bg-white px-4 py-3 text-[#2F2F2F] focus:border-[#D6452F] focus:outline-none focus:ring-2 focus:ring-[#D6452F]/20"
                  >
                    <option value="">Select...</option>
                    <option value="small">Small (14-16 ft)</option>
                    <option value="medium">Medium (18-20 ft)</option>
                    <option value="large">Large (22-26 ft)</option>
                    <option value="trailer">Trailer</option>
                    <option value="unsure">Not sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="menuType" className="mb-2 block text-sm font-medium text-[#2F2F2F]">
                    Menu Type
                  </label>
                  <select
                    id="menuType"
                    name="menuType"
                    value={formData.menuType}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-[#EDEDED] bg-white px-4 py-3 text-[#2F2F2F] focus:border-[#D6452F] focus:outline-none focus:ring-2 focus:ring-[#D6452F]/20"
                  >
                    <option value="">Select...</option>
                    <option value="bbq">BBQ/Smoked Meats</option>
                    <option value="burgers">Burgers & Sandwiches</option>
                    <option value="mexican">Mexican/Tacos</option>
                    <option value="pizza">Pizza</option>
                    <option value="asian">Asian Cuisine</option>
                    <option value="desserts">Desserts/Ice Cream</option>
                    <option value="coffee">Coffee/Beverages</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-[#2F2F2F]">
                    Equipment Needed (Select all that apply)
                  </label>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Grill/Griddle",
                      "Fryer",
                      "Oven",
                      "Refrigeration",
                      "Freezer",
                      "Hood System",
                      "Generator",
                      "Water System",
                      "POS System",
                      "Fire Suppression"
                    ].map((equipment) => (
                      <label key={equipment} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          value={equipment}
                          checked={formData.equipmentNeeds.includes(equipment)}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 rounded border-[#EDEDED] text-[#D6452F] focus:ring-2 focus:ring-[#D6452F]/20"
                        />
                        <span className="text-sm text-[#2F2F2F]">{equipment}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-[#2F2F2F]">
                Additional Information
              </h2>
              <div className="grid gap-6">
                <div>
                  <label htmlFor="description" className="mb-2 block text-sm font-medium text-[#2F2F2F]">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Tell us about your vision, menu concept, special requirements, or any questions you have..."
                    className="w-full rounded-lg border border-[#EDEDED] bg-white px-4 py-3 text-[#2F2F2F] focus:border-[#D6452F] focus:outline-none focus:ring-2 focus:ring-[#D6452F]/20"
                  />
                </div>

                <div>
                  <label htmlFor="hearAbout" className="mb-2 block text-sm font-medium text-[#2F2F2F]">
                    How did you hear about us?
                  </label>
                  <select
                    id="hearAbout"
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-[#EDEDED] bg-white px-4 py-3 text-[#2F2F2F] focus:border-[#D6452F] focus:outline-none focus:ring-2 focus:ring-[#D6452F]/20"
                  >
                    <option value="">Select...</option>
                    <option value="search">Google/Search Engine</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="event">Saw at Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="border-t border-[#EDEDED] pt-6">
              <button
                type="submit"
                className="w-full rounded-lg bg-[#D6452F] px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-[#D6452F]/90 focus:outline-none focus:ring-2 focus:ring-[#D6452F]/20 focus:ring-offset-2 sm:w-auto"
              >
                Submit Quote Request
              </button>
              <p className="mt-4 text-sm text-[#8A8A8A]">
                We'll review your request and get back to you within 1-2 business days with a detailed quote.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Why Get a Quote */}
      <section className="w-full bg-[#EDEDED] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#2F2F2F] sm:text-4xl">
              What Happens Next?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "We Review",
                description: "Our team carefully reviews your requirements and project details"
              },
              {
                step: "2",
                title: "We Respond",
                description: "You'll receive a detailed quote and project proposal within 1-2 business days"
              },
              {
                step: "3",
                title: "We Consult",
                description: "Schedule a call to discuss your project, refine details, and answer questions"
              }
            ].map((item) => (
              <div key={item.step} className="rounded-lg bg-white p-8 text-center">
                <div className="mb-4 text-4xl font-bold text-[#D6452F]">{item.step}</div>
                <h3 className="mb-2 text-xl font-semibold text-[#2F2F2F]">{item.title}</h3>
                <p className="text-[#8A8A8A]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
