import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FirstPage from './components/Page/FirstPage';
import SecondPage from './components/Page/SecondPage';
import FeaturesPage1 from './components/Page/FeaturesPage1';
import FeaturePage2 from './components/Page/FeaturePage2';
import FeaturePage3 from './components/Page/FeaturePage3';
import CreateAccount from './components/Page/CreateAccount';
import Login from './components/Page/Login';
import LoginValidation from './components/validations/LoginValidation'
import FeaturesBubble from './components/Page/FeaturesBubble';
import Mainpage from './components/Page/Mainpage'
import PoliciesPage from './components/Page/PoliciesPage'





const App = () => {
  return (
      <div>
           <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/SecondPage" element={<SecondPage />} /> 
        <Route path="/FeaturesPage1" element={<FeaturesPage1 />} />
        <Route path="/FeaturePage2" element={<FeaturePage2 />} />
        <Route path="/FeaturePage3" element={<FeaturePage3 />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/LoginValidation" element={<LoginValidation />} />
        <Route path="/PoliciesPage" element={<PoliciesPage />} />
        <Route path="/Mainpage" element={<Mainpage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      </div>
  );
};

export default App;
