
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import style from './FeatureBubble.module.css';

const FeaturesBubble = () => {
  const location = useLocation();
  const [activeBubble, setActiveBubble] = useState(1);

  useEffect(() => {
    const featureNumber = Number(location.pathname.slice(-1));
    setActiveBubble(featureNumber);
  }, [location]);

  return (
    <div className={style.bubblesContainer}>
      <div className={`${style.bubble} ${activeBubble === 1 ? style.active : ''}`} />
      <div className={`${style.bubble} ${activeBubble === 2 ? style.active : ''}`} />
      <div className={`${style.bubble} ${activeBubble === 3 ? style.active : ''}`} />
    </div>
  );
};

export default FeaturesBubble;
