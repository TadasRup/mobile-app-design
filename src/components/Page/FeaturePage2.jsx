
import React from 'react';
import { Link } from 'react-router-dom';
import style from "./FeaturePage2.module.css";
import FeatureBubbles from './FeaturesBubble';
import StudioQuality from '../../img/quality.png'

const FeaturePage2 = () => {
  return (
    <div className={style.featurepage}>
      <img src={StudioQuality} alt="Logo" className={style.logo} />
      <FeatureBubbles />
      <h1 className={style.content}>PERFECT SOUND</h1>
      <p className={style.content}>Our app holds highest quality uploads!</p>
      <Link className={style.continuebutton} to="/FeaturePage3">Continue</Link>
    </div>
  )
}

export default FeaturePage2;
