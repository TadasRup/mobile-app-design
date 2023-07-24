import React from 'react';
import companyLogo from '../../img/techno.png';
import style from '../Page/FirstPage.module.css';

const FirstPage = () => {
  return (
    <div className={style.firstpage}>
      <img src={companyLogo} alt="Logo" className={style.logo} />
      <h1 className={style.heading}>A unique techno platform will allow you to discover undiscovered talents and share your creations</h1>
      <button className={style.getstartedbutton}>Get started now!</button>
    </div>
  );
};


export { FirstPage };
