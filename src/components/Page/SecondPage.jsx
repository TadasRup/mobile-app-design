import React from 'react';
import style from '../Page/SecondPage.module.css';

const SecondPage = () => {
  return (
    <div className={style.secondpage}>
      <h1 className={style.message}>Are you first time in this app?</h1>
      <button className={style.continuebutton}>Continue</button>
    </div>
  );
};

export default SecondPage;