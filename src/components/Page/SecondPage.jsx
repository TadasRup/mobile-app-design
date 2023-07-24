// SecondPage.js

import React from 'react';
import style2 from '../Page/SecondPage.module.css';

const SecondPage = () => {
  return (
    <div className={style2.secondpage}>
      <h1 className={style2.message}>Are you first time in this app?</h1>
      <button className={style2.continuebutton}>Continue</button>
    </div>
  );
};

export default SecondPage;