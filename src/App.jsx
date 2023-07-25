import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FirstPage from './components/Page/FirstPage';
import SecondPage from './components/Page/SecondPage';
import FeaturesPage from './components/Page/FeaturesPage';
import CreateAccount from './components/Page/CreateAccount';

const App = () => {
  return (
      <div>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="SecondPage" element={<SecondPage />} />
          <Route path="FeaturesPage" element={<FeaturesPage />} />
          <Route path="FeaturesPage" element={<CreateAccount />} />
        </Routes>
      </div>
  );
};

export default App;
