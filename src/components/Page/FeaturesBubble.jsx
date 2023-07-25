import React from 'react';
import style from './FeatureBubble.module.css';

const FeatureBubble = ({ active }) => {
  return (
    <div
      className={`${style.bubble} ${active ? style.active : ''}`}
    ></div>
  );
};

export default FeatureBubble;
