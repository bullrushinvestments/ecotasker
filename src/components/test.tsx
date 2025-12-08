import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations'; // Assume this is a GraphQL mutation to create tests

interface TestForm {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestForm>();

  const [createTest] = useMutation(CREATE_TEST);

  const onSubmit: SubmitHandler<TestForm> = async (data) => {
    try {
      setLoading(true);
      await createTest({ variables: data });
      reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center justify-between">
      <h1 className="text-xl font-bold mb-4">Write Tests</h1>
      {error && <p role="alert" aria-live="assertive" className="mb-2 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">Title</label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'This field is required' })}
            placeholder="Enter test title..."
            aria-label="Test Title"
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          />
          <p role="alert" className="mt-1 text-red-500">{errors.title?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'This field is required' })}
            placeholder="Enter test description..."
            aria-label="Test Description"
            rows={5}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          />
          <p role="alert" className="mt-1 text-red-500">{errors.description?.message}</p>
        </div>
        <button
          type="submit"
          disabled={loading}
          aria-label="Submit Test Form"
          className={`w-full p-2 bg-blue-500 text-white rounded ${loading ? 'cursor-not-allowed opacity-70' : ''}`}
        >
          {loading ? 'Submitting...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations'; // Assume this is a GraphQL mutation to create tests

interface TestForm {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestForm>();

  const [createTest] = useMutation(CREATE_TEST);

  const onSubmit: SubmitHandler<TestForm> = async (data) => {
    try {
      setLoading(true);
      await createTest({ variables: data });
      reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center justify-between">
      <h1 className="text-xl font-bold mb-4">Write Tests</h1>
      {error && <p role="alert" aria-live="assertive" className="mb-2 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">Title</label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'This field is required' })}
            placeholder="Enter test title..."
            aria-label="Test Title"
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          />
          <p role="alert" className="mt-1 text-red-500">{errors.title?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'This field is required' })}
            placeholder="Enter test description..."
            aria-label="Test Description"
            rows={5}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          />
          <p role="alert" className="mt-1 text-red-500">{errors.description?.message}</p>
        </div>
        <button
          type="submit"
          disabled={loading}
          aria-label="Submit Test Form"
          className={`w-full p-2 bg-blue-500 text-white rounded ${loading ? 'cursor-not-allowed opacity-70' : ''}`}
        >
          {loading ? 'Submitting...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;