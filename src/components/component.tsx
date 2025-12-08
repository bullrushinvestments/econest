import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpecs, setBusinessSpecs] = useState<BusinessSpec[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<{ data: BusinessSpec[] }>('https://api.example.com/business-specs')
      .then(response => {
        setBusinessSpecs(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching business specs:', error);
        setError('Failed to load business specifications.');
        setLoading(false);
      });
  }, []);

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div className={clsx('p-4', 'bg-white', 'shadow-md', { 'text-center': isMobile })}>
      <h2 className="mb-4 text-xl font-bold">Create Business Specification</h2>
      {loading && <p>Loading...</p>}
      {!loading && error ? (
        <div role="alert" aria-live="assertive">
          <p>{error}</p>
        </div>
      ) : (
        <>
          {businessSpecs.map(spec => (
            <div key={spec.id} className="mb-4 border-b pb-2">
              <h3 className="text-lg font-medium">{spec.name}</h3>
              <p dangerouslySetInnerHTML={{ __html: spec.description }} />
              <ul className="mt-2 list-disc pl-5">
                {spec.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpecs, setBusinessSpecs] = useState<BusinessSpec[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<{ data: BusinessSpec[] }>('https://api.example.com/business-specs')
      .then(response => {
        setBusinessSpecs(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching business specs:', error);
        setError('Failed to load business specifications.');
        setLoading(false);
      });
  }, []);

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div className={clsx('p-4', 'bg-white', 'shadow-md', { 'text-center': isMobile })}>
      <h2 className="mb-4 text-xl font-bold">Create Business Specification</h2>
      {loading && <p>Loading...</p>}
      {!loading && error ? (
        <div role="alert" aria-live="assertive">
          <p>{error}</p>
        </div>
      ) : (
        <>
          {businessSpecs.map(spec => (
            <div key={spec.id} className="mb-4 border-b pb-2">
              <h3 className="text-lg font-medium">{spec.name}</h3>
              <p dangerouslySetInnerHTML={{ __html: spec.description }} />
              <ul className="mt-2 list-disc pl-5">
                {spec.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;