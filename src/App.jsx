import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FirstPage from './components/Page/FirstPage';
import SecondPage from './components/Page/SecondPage';
import FeaturesPage1 from './components/Page/FeaturesPage1';
import FeaturePage2 from './components/Page/FeaturePage2';
import FeaturePage3 from './components/Page/FeaturePage3';
import CreateAccount from './components/Page/CreateAccount';
import FeaturesBubble from './components/Page/FeaturesBubble';

const App = () => {
  return (
      <div>
           <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/SecondPage" element={<SecondPage />} /> 
        <Route path="/FeaturesPage1" element={<FeaturesPage1 />} />
        <Route path="/FeaturesPage2" element={<FeaturePage2 />} />
        <Route path="/FeaturesPage1" element={<FeaturePage3 />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
      </Routes>
      </div>
  );
};

export default App;
