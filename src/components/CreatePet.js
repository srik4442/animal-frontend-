// frontend/src/components/CreatePet.js

import React, { useState } from 'react';
import PetForm from './PetForm';
import Axios from 'axios';
import './CreatePet.css';
function CreatePet() {
  const [petData, setPetData] = useState([]);

  const handleCreatePet = (data) => {
    Axios.post('https://crud-2-4nci.onrender.com/petRoute/create-pet', data)
      .then((res) => {
        if (res.status === 200) {
          alert('Pet reported successfully');
          setPetData((prevPetData) => [...prevPetData, res.data]);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="wrapper">
      <h2 class="main">Reporting Pet</h2>
      <PetForm onSubmit={handleCreatePet} />
    </div>
  );
}

export default CreatePet;
