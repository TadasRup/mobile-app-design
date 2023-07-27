
import React from 'react';
import { Link } from 'react-router-dom';
import style4 from '../../components/css/FeaturePage3.module.css'
import FeatureBubbles from '../Page/FeaturesBubble';
import BigNames from '../../img/bignames.png'


const FeaturePage3 = () => {
  return (
    <div className={style4.featurepage}>
      <img src={BigNames} alt="Logo" className={style4.logo} />
      <FeatureBubbles />
      <h1 className={style4.content}>MEET RESIDENTS</h1>
      <p className={style4.content}>Bbe the first to hear new popular sets!</p>
      <Link className={style4.continuebutton} to="/CreateAccount">Continue</Link>
    </div>
  )
}

export default FeaturePage3;
