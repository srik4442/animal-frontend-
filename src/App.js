// frontend/src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePet from './components/CreatePet';
import PetList from './components/PetList';
import EditPet from './components/EditPet';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<CreatePet />} />
          <Route path="/create-pet" element={<CreatePet />} />
          <Route path="/pet-list" element={<PetList />} />
          <Route path="/edit-pet/:id" element={<EditPet />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
