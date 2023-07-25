// FeaturePage3.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturePage3 = () => {
  return (
    <div>
      <h1>Feature 3</h1>
      <p>This is the third feature content.</p>
      <Link to="/CreateAccount">Continue</Link>
    </div>
  );
};

export default FeaturePage3;
