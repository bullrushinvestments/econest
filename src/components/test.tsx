import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface TestimonialFormValues {
  name: string;
  email: string;
  message: string;
}

const WriteTestsComponent: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().min(10, 'Message must be at least 10 characters long').required('Message is required')
  });

  const formik = useFormik<TestimonialFormValues>({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form submitted:', values);
      } catch (err) {
        setError('There was an error submitting your message. Please try again later.');
      }

      setLoading(false);
    }
  });

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      {error && <p role="alert" className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your Name"
            className={`w-full px-3 py-2 border rounded ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm italic">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your Email Address"
            className={`w-full px-3 py-2 border rounded ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm italic">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your Message"
            rows={4}
            className={`w-full px-3 py-2 border rounded ${formik.touched.message && formik.errors.message ? 'border-red-500' : ''}`}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-sm italic">{formik.errors.message}</div>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 font-bold bg-blue-500 text-white rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTestsComponent;

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface TestimonialFormValues {
  name: string;
  email: string;
  message: string;
}

const WriteTestsComponent: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().min(10, 'Message must be at least 10 characters long').required('Message is required')
  });

  const formik = useFormik<TestimonialFormValues>({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form submitted:', values);
      } catch (err) {
        setError('There was an error submitting your message. Please try again later.');
      }

      setLoading(false);
    }
  });

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      {error && <p role="alert" className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your Name"
            className={`w-full px-3 py-2 border rounded ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm italic">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your Email Address"
            className={`w-full px-3 py-2 border rounded ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm italic">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your Message"
            rows={4}
            className={`w-full px-3 py-2 border rounded ${formik.touched.message && formik.errors.message ? 'border-red-500' : ''}`}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-sm italic">{formik.errors.message}</div>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 font-bold bg-blue-500 text-white rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTestsComponent;