import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useSearchParams } from 'next/navigation';

export default function SeoContact() {
  const searchParams = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState('');

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID!);
    setSelectedPlan(searchParams.get('plan') || '');
  }, [searchParams]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const templateParams = {
      from_name: formData.get('name') as string,
      from_email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      website: formData.get('website') as string,
      budget: formData.get('budget') as string,
      seo_plan: formData.get('seo_plan') as string,
      current_seo: formData.get('current_seo') as string,
      main_goals: formData.get('main_goals') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams
      );

      if (response.status === 200) {
        alert('Thank you for your inquiry. We\'ll get back to you soon!');
        form.reset();
      } else {
        alert('Error sending email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending email. Please try again.');
    }
  };

  return (
    <div className="text-navy min-h-screen bg-slate z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1 
          className="text-4xl md:text-6xl font-light mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let&apos;s Boost Your Online Presence
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 gap-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-light mb-8">Tell Us About Your Project</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name <span className="text-red-500">*</span></label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email <span className="text-red-500">*</span></label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
                <input type="text" id="company" name="company" className="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300" />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium mb-2">Website URL</label>
                <input type="url" id="website" name="website" className="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300" />
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">Monthly Budget for SEO</label>
                <select id="budget" name="budget" className="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300">
                  <option value="">Select a budget range</option>
                  <option value="$500 - $1,000">$500 - $1,000</option>
                  <option value="$1,000 - $2,000">$1,000 - $2,000</option>
                  <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                </select>
              </div>
              <div>
                <label htmlFor="seo_plan" className="block text-sm font-medium mb-2">Preferred SEO Plan</label>
                <select id="seo_plan" name="seo_plan" value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)} className="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300">
                  <option value="">Select a plan</option>
                  <option value="Starter SEO">Starter SEO</option>
                  <option value="Growth SEO">Growth SEO</option>
                  <option value="Pro SEO">Pro SEO</option>
                </select>
              </div>
              <div>
                <label htmlFor="current_seo" className="block text-sm font-medium mb-2">Current SEO Efforts</label>
                <textarea id="current_seo" name="current_seo" rows={3} className="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300" placeholder="Briefly describe your current SEO strategy, if any."></textarea>
              </div>
              <div>
                <label htmlFor="main_goals" className="block text-sm font-medium mb-2">Main SEO Goals</label>
                <textarea id="main_goals" name="main_goals" rows={3} className="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300" placeholder="What are your main objectives for SEO?"></textarea>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Additional Information</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300" placeholder="Any other details you'd like to share about your project?"></textarea>
              </div>
              <motion.button
                type="submit"
                className="bg-[#D67530] text-white font-medium px-6 py-3 rounded-full flex items-center justify-center relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
            </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-orange" />
              <span>hello@bihub.tech</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl text-orange" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-orange" />
              <span>123 Innovation Drive, Tech Valley, CA 94000</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}