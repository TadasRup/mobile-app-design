import React from 'react';
import companyLogo from '../../img/prodtech.png';
import style from '../Page/FirstPage.module.css';

const FirstPage = () => {
  return (
    <div className={style.firstpage}>
      <img src={companyLogo} alt="Logo" className={style.logo} />
      <h1 className={style.heading}>Upload your tracks on the biggest music platform! You will be noticed by thousands of enthusiasts!</h1>
      <button className={style.getstartedbutton}>Get started now!</button>
    </div>
  );
};


export { FirstPage };
