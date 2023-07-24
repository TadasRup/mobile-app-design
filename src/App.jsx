import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FirstPage from './components/Page/FirstPage';
import SecondPage from './components/Page/SecondPage';

const App = () => {
  return (
      <div>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="about" element={<SecondPage />} />
        </Routes>
      </div>
  );
};

export default App;
