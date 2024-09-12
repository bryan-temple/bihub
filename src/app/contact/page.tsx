"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';


const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<typeof formState> = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formState.email)) newErrors.email = 'Email is invalid';
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message. We\'ll be in touch soon!');
      setFormState({ name: '', email: '', message: '' });
    } else {
      setErrors(newErrors);
    }
  };

  return (

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-orange text-center">Contact Us</h1>
        
        <p className="text-lg mb-8 text-center">
          Have a question or ready to start your next project? We'd love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label htmlFor="name" className="block text-lg mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="w-full p-3 bg-navy/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <p id="name-error" className="text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-lg mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full p-3 bg-navy/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <p id="email-error" className="text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-lg mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 bg-navy/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            ></textarea>
            {errors.message && <p id="message-error" className="text-red-500 mt-1">{errors.message}</p>}
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange text-navy font-bold py-3 px-8 rounded-full text-lg transition duration-300 hover:bg-orange-600 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </div>
        </form>

        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 bg-green/20 text-green rounded-lg text-center"
            role="alert"
          >
            {submitMessage}
          </motion.div>
        )}
      </motion.div>

  );
};

export default Contact;