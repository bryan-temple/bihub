'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  business: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', data)
      reset()
      alert('Form submitted successfully!')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-navy mb-1">Let&apos;s talk,</h1>
      <h2 className="text-2xl font-bold text-navy mb-8">We respond immediately!</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="sr-only">Your name</label>
          <input
            id="name"
            type="text"
            {...register('name')}
            placeholder="Your name"
            className="w-full p-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none placeholder-gray-500"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Enter your email</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            placeholder="Enter your email"
            className="w-full p-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none placeholder-gray-500"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">Phone</label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="Phone"
            className="w-full p-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none placeholder-gray-500"
          />
        </div>
        <div>
          <label htmlFor="business" className="sr-only">Tell us about your business...</label>
          <textarea
            id="business"
            {...register('business')}
            placeholder="Tell us about your business..."
            rows={4}
            className="w-full p-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none placeholder-gray-500 resize-none"
          ></textarea>
        </div>
        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-36 h-36 rounded-full bg-blue-900 text-white text-sm font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 ease-in-out flex items-center justify-center"
          >
            {isSubmitting ? '...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  )
}