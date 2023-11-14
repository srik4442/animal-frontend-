import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PetForm from './PetForm';
import Axios from 'axios';
import './EditPet.css';
function EditPet() {
  const { id } = useParams();
  const [initialData, setInitialData] = useState({
    name: '',
    type: '',
    breed: '',
    color: '',
    description: '',
    status: '',
  });

  useEffect(() => {
    Axios.get(`https://crud-2-4nci.onrender.com/petRoute/update-pet/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setInitialData(res.data);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, [id]);

  const handleEditPet = (data) => {
    Axios.put(`https://crud-2-4nci.onrender.com/petRoute/update-pet/${id}`, data)
      .then((res) => {
        if (res.status === 200) {
          alert('Pet updated successfully');
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="wrapper">
      <h2>Edit Pet</h2>
      <PetForm onSubmit={handleEditPet} initialData={initialData} />
    </div>
  );
}

export default EditPet;
