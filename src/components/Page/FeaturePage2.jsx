// FeaturePage2.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import style from "./FeaturePage2.module.css";
import FeatureBubbles from './FeaturesBubble';

const FeaturePage2 = () => {
  return (
    <div className={style.featurepage}>
      <FeatureBubbles />
      <h1 className={style.content}>Feature 2</h1>
      <p className={style.content}>This is the first feature content.</p>
      <Link className={style.continuebutton} to="/FeaturePage3">Continue</Link>
    </div>
  )
}

export default FeaturePage2;
