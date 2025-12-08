import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setRequirements } from './redux/actions/requirementsActions'; // Assuming Redux is used for state management

interface Requirement {
  id: number;
  name: string;
  description: string;
  status: boolean; // true if requirement is met
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
        setRequirements(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load requirements", err);
        setError("An error occurred while fetching the requirements.");
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  const handleRequirementChange = (id: number, status: boolean) => {
    setRequirements(prevRequirements =>
      prevRequirements.map(requirement =>
        requirement.id === id ? { ...requirement, status } : requirement
      )
    );
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Gather Requirements</h2>
      {requirements.map(requirement => (
        <div key={requirement.id} className="mb-4">
          <label htmlFor={`req-${requirement.id}`} className="block text-sm font-medium text-gray-700">
            {requirement.name}
          </label>
          <input
            id={`req-${requirement.id}`}
            type="checkbox"
            checked={requirement.status}
            onChange={() => handleRequirementChange(requirement.id, !requirement.status)}
            className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          />
        </div>
      ))}
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setRequirements } from './redux/actions/requirementsActions'; // Assuming Redux is used for state management

interface Requirement {
  id: number;
  name: string;
  description: string;
  status: boolean; // true if requirement is met
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
        setRequirements(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load requirements", err);
        setError("An error occurred while fetching the requirements.");
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  const handleRequirementChange = (id: number, status: boolean) => {
    setRequirements(prevRequirements =>
      prevRequirements.map(requirement =>
        requirement.id === id ? { ...requirement, status } : requirement
      )
    );
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Gather Requirements</h2>
      {requirements.map(requirement => (
        <div key={requirement.id} className="mb-4">
          <label htmlFor={`req-${requirement.id}`} className="block text-sm font-medium text-gray-700">
            {requirement.name}
          </label>
          <input
            id={`req-${requirement.id}`}
            type="checkbox"
            checked={requirement.status}
            onChange={() => handleRequirementChange(requirement.id, !requirement.status)}
            className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          />
        </div>
      ))}
    </div>
  );
};

export default GatherRequirements;