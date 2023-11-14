// frontend/src/components/PetList.js

import React, { useEffect, useState } from 'react';
import PetListRow from './PetListRow';
import Axios from 'axios';
import './PetList.css';

function PetList() {
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    Axios.get('https://crud-2-4nci.onrender.com/petRoute/')
      .then((res) => {
        if (res.status === 200) {
          setPetList(res.data);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div className="pet-list-container">
      {petList.map((pet) => (
        <PetListRow key={pet._id} pet={pet} />
      ))}
    </div>
  );
}

export default PetList;
