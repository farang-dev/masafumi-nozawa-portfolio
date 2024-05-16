import { useState, ChangeEvent, FormEvent } from 'react';
import Layout from '../components/Layout';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add form submission logic
    console.log(formData);
  };

  return (
    <Layout>
      <h2 className='text-3xl font-bold mb-4'>Contact</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Name</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Message</label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
          />
        </div>
        <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded'>Send</button>
      </form>
    </Layout>
  );
}
