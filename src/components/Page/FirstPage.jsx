import React from 'react';
import style from './FirstPage.module.css'
import companyLogo from '../../img/prodtech.png'
import { Link } from 'react-router-dom';



const FirstPage = () => {

  return (
    <div className={style.firstpage}>
    <img src={companyLogo} alt="Logo" className={style.logo} />
    <div className={style.movinglines}></div>
    <h1 className={style.heading}>Upload your tracks on the biggest music platform! You will be noticed by thousands of enthusiasts!</h1>
    <Link className={style.getstartedbutton} to="/SecondPage">Get started now!</Link>
    <audio src="/SYSTEM2.mp3" autoPlay loop volume="0.9">
        Your browser does not support the audio element.
      </audio>

  </div>

)};



export default FirstPage;
