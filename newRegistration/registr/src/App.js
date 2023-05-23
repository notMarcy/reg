import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './login';
import RegistrPage from './registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;