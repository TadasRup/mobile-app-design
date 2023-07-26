import React from 'react';
import style from '../Page/SecondPage.module.css';
import { Link } from 'react-router-dom';

const SecondPage = () => {
  return (
    <div className={style.secondpage}>
      <h1 className={style.message}>Are you first time in this app?</h1>
      <Link className={style.continuebutton} to="/Login">No, already have a accont</Link>
      <Link className={style.continuebutton} to="/FeaturesPage1">Yes, Im New!</Link>
    </div>
  );
};

export default SecondPage;