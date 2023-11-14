// frontend/src/components/PetForm.js

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Petform.css'; 

function PetForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    breed: '',
    color: '',
    description: '',
    status: '',
  });

  useEffect(() => {
    // Set initialData only if it exists
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name(for contact):</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
      </div>
      <div>
        <label>Type:</label>
        <input
          type="text"
          value={formData.type}
          onChange={(e) => handleInputChange('type', e.target.value)}
        />
      </div>
      <div>
        <label>Breed:</label>
        <input
          type="text"
          value={formData.breed}
          onChange={(e) => handleInputChange('breed', e.target.value)}
        />
      </div>
      <div>
        <label>Color:</label>
        <input
          type="text"
          value={formData.color}
          onChange={(e) => handleInputChange('color', e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
        />
      </div>
      <div>
        <label>Status:</label>
        <select
          value={formData.status}
          onChange={(e) => handleInputChange('status', e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="lost">Lost</option>
          <option value="found">Found</option>
        </select>
      </div>
      <button type="submit">Report</button>
    </form>
  );
}

export default PetForm;
