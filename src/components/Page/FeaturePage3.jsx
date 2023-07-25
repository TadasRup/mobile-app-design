// FeaturePage3.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import style4 from './FeaturePage3.module.css'
import FeatureBubbles from './FeaturesBubble';

const FeaturePage3 = () => {
  return (
    <div className={style4.featurepage}>
      <FeatureBubbles />
      <h1 className={style4.content}>Feature 3</h1>
      <p className={style4.content}>This is the first feature content.</p>
      <Link className={style4.continuebutton} to="/CreateAccount">Continue</Link>
    </div>
  )
}

export default FeaturePage3;
