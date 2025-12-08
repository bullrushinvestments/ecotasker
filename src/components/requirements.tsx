import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import type { InferPropertyParams } from '@chakra-ui/react';

interface Requirement {
  name: string;
  description: string;
  isEssential: boolean;
}

interface GatherRequirementsFormValues {
  requirements: Requirement[];
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const { register, handleSubmit } = useForm<GatherRequirementsFormValues>();

  const onSubmit: SubmitHandler<GatherRequirementsFormValues> = (data) => {
    setRequirements(data.requirements);
  };

  const handleAddRequirement = () => {
    // Add logic to add a new requirement
  };

  const handleRemoveRequirement = (index: number) => {
    // Add logic to remove a requirement
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather Requirements Form">
      {requirements.map((requirement, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            placeholder="Name of Requirement"
            {...register(`requirements.${index}.name`)}
            aria-label={`Requirement name ${index + 1}`}
          />
          <textarea
            rows={3}
            placeholder="Description of Requirement"
            {...register(`requirements.${index}.description`)}
            aria-label={`Requirement description ${index + 1}`}
          />
          <label className="inline-flex items-center">
            <input type="checkbox" {...register(`requirements.${index}.isEssential`)} defaultChecked={requirement.isEssential} />
            <span className="ml-2">Is Essential</span>
          </label>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddRequirement}
        aria-label="Add Requirement Button"
      >
        Add Requirement
      </button>
      <button type="submit" aria-label="Submit Requirements">
        Submit Requirements
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import type { InferPropertyParams } from '@chakra-ui/react';

interface Requirement {
  name: string;
  description: string;
  isEssential: boolean;
}

interface GatherRequirementsFormValues {
  requirements: Requirement[];
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const { register, handleSubmit } = useForm<GatherRequirementsFormValues>();

  const onSubmit: SubmitHandler<GatherRequirementsFormValues> = (data) => {
    setRequirements(data.requirements);
  };

  const handleAddRequirement = () => {
    // Add logic to add a new requirement
  };

  const handleRemoveRequirement = (index: number) => {
    // Add logic to remove a requirement
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather Requirements Form">
      {requirements.map((requirement, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            placeholder="Name of Requirement"
            {...register(`requirements.${index}.name`)}
            aria-label={`Requirement name ${index + 1}`}
          />
          <textarea
            rows={3}
            placeholder="Description of Requirement"
            {...register(`requirements.${index}.description`)}
            aria-label={`Requirement description ${index + 1}`}
          />
          <label className="inline-flex items-center">
            <input type="checkbox" {...register(`requirements.${index}.isEssential`)} defaultChecked={requirement.isEssential} />
            <span className="ml-2">Is Essential</span>
          </label>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddRequirement}
        aria-label="Add Requirement Button"
      >
        Add Requirement
      </button>
      <button type="submit" aria-label="Submit Requirements">
        Submit Requirements
      </button>
    </form>
  );
};

export default GatherRequirements;