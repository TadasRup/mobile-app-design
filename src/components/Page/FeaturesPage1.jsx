// FeaturePage1.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import style2 from "./FeaturesPage1.module.css"
import Feature1logo from '../../img/globalconnect.png'
import FeatureBubbles from './FeaturesBubble';


const FeaturePage1 = () => {
  return (
    <div className={style2.featurepage}>
      <img src={Feature1logo} alt="Logo" className={style2.logo} />
      <FeatureBubbles />
      <h1 className={style2.content}>WORLDWIDE APP</h1>
      <p className={style2.content}>Meet more than 500k registered users!</p>
      <Link className={style2.continuebutton} to="/FeaturePage2">Continue</Link>
    </div>
  );
};

export default FeaturePage1;
