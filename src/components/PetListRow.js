// frontend/src/components/PetListRow.js

import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function PetListRow({ pet }) {
  const handleDeletePet = () => {
    Axios.delete(`https://crud-2-4nci.onrender.com/petRoute/delete-pet/${pet._id}`)
      .then((res) => {
        if (res.status === 200) {
          alert('Pet deleted successfully');
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="flash-card">
      <div>
        <strong>Name(for contact):</strong> {pet.name}
      </div>
      <div>
        <strong>Type:</strong> {pet.type}
      </div>
      <div>
        <strong>Breed:</strong> {pet.breed}
      </div>
      <div>
        <strong>Color:</strong> {pet.color}
      </div>
      <div>
        <strong>Description:</strong> {pet.description}
      </div>
      <div>
        <strong>Status:</strong> {pet.status}
      </div>
      <div className="card-buttons">
        <Link to={`/edit-pet/${pet._id}`} className="btn btn-success me-2">
          Edit
        </Link>
        <button onClick={handleDeletePet} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}

export default PetListRow;
