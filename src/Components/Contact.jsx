import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import toast from 'react-hot-toast';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, 'contacts'), {
        ...data,
        createdAt: new Date(),
      });
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-[#1F252E]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Contact Me</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white mb-2">Name</label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className="w-full px-4 py-2 rounded-lg bg-[#27293d] text-white border border-gray-600 focus:outline-none focus:border-[#f9532d]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="w-full px-4 py-2 rounded-lg bg-[#27293d] text-white border border-gray-600 focus:outline-none focus:border-[#f9532d]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <textarea
              id="message"
              {...register('message')}
              rows="5"
              className="w-full px-4 py-2 rounded-lg bg-[#27293d] text-white border border-gray-600 focus:outline-none focus:border-[#f9532d]"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-lg bg-[#f9532d] text-white font-semibold hover:bg-opacity-90 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;