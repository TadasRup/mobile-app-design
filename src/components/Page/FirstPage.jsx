import React from 'react';
import companyLogo from '../../img/backdoorblack.png';
import style from '../Page/FirstPage.module.css';

const FirstPage = () => {
  return (
    <div className={style.firstpage}>
      <img src={companyLogo} alt="Logo" className={style.logo} />
      <h1 className={style.heading}>Backdoor is the largest trade-in app in the world! </h1>
      <button className={style.getstartedbutton}>Get started now!</button>
    </div>
  );
};


export { FirstPage };
