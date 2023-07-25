// FeaturePage2.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturePage2 = () => {
  return (
    <div>
      <h1>Feature 2</h1>
      <p>This is the second feature content.</p>
      <Link to="/feature3">Continue</Link>
    </div>
  );
};

export default FeaturePage2;
