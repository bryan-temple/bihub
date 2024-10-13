"use client"
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface IFormInput {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  description: string;
}

const ProjectProposal: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_PROJECT_PROPOSAL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_PROJECT_PROPOSAL_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          project_type: data.projectType,
          budget: data.budget,
          message: data.description,
        },
        process.env.NEXT_PUBLIC_PROJECT_PROPOSAL_USER_ID
      );

      if (result.text === 'OK') {
        setSubmissionStatus('success');
        reset(); // Reset form fields after successful submission
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error submitting proposal:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Bihub Technology</div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">Start Your Project</h1>
          
          {submissionStatus !== 'idle' && (
            <Alert className="mt-4">
              <AlertDescription>
                {submissionStatus === 'success' 
                  ? "Thank you for your project proposal! We'll be in touch soon."
                  : "Failed to submit proposal. Please try again or contact support."}
              </AlertDescription>
            </Alert>
          )}

          <p className="mt-2 text-gray-500">Let&apos;s bring your vision to life. Fill out the form below to get started on your web development journey.</p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
              <input
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
            </div>
            
            <div className="mb-4">
              <label htmlFor="projectType" className="block text-gray-700 text-sm font-bold mb-2">Project Type</label>
              <select
                {...register("projectType", { required: "Project type is required" })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select a project type</option>
                <option value="website">Website Development</option>
                <option value="ecommerce">E-commerce Solution</option>
                <option value="webapp">Web Application</option>
                <option value="other">Other</option>
              </select>
              {errors.projectType && <p className="text-red-500 text-xs italic">{errors.projectType.message}</p>}
            </div>
            
            <div className="mb-4">
              <label htmlFor="budget" className="block text-gray-700 text-sm font-bold mb-2">Estimated Budget</label>
              <input
                {...register("budget", { required: "Budget is required" })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="e.g., $5000"
              />
              {errors.budget && <p className="text-red-500 text-xs italic">{errors.budget.message}</p>}
            </div>
            
            <div className="mb-6">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Project Description</label>
              <textarea
                {...register("description", { required: "Description is required" })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                placeholder="Tell us about your project..."
              ></textarea>
              {errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}
            </div>
            
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                Start a Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProjectProposal;