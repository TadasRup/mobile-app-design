import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../../components/css/Mainpage.module.css';
import companyLogo from '../../img/prodtech.png';
import Dj1 from '../../img/ellenallien.jpg';
import tomorrow from '../../img/tland.webp';
import Dj2 from '../../img/dj2.jpg';
import Features from '../../img/dj1.jpg';

const MainPage = () => {
  const [likeCount, setLikeCount] = useState(() => JSON.parse(localStorage.getItem('logo')) ||998);

 

  const handleLikeClick = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };



  return (
    <header>
      <div className={style.mainheader}>
        <img src={companyLogo} alt="Logo" className={style.logo} />
        <Link className={style.logoutbutton} to="/Login">
          LOG OUT
        </Link>
      </div>
      <main className={style.mainstyle}>
        <div>
          <p className={style.headertextfeed}>NEWS </p>
          <img src={Dj1} alt="Logo" className={style.logo2} />
          <p className={style.headertext}>
            Ellen Allien (52) is celebrating her 30th year as a DJ and has a surprise!
          </p>
          <div className={style.likeContainer}>
            <button className={style.likeButton} onClick={handleLikeClick}>
              vote
            </button>
            <p className={style.likeCount}>{likeCount} Votes</p>
          </div>
          <button className={style.exploredj}>READ MORE</button>
          
        </div>

        <div className={style.news2}>
        <p className={style.headertextfeed}>EVENTS</p>
        <img src={tomorrow} alt="Logo" className={style.logo2} />
          <p className={style.headertext}>
            TOMORROWLAND 2023 had visited people record!
          </p>
          <div className={style.likeContainer}>
            <button className={style.likeButton} onClick={handleLikeClick}>
              vote
            </button>
            <p className={style.likeCount}>{likeCount} Votes</p>
          </div>
          <button className={style.exploredj}>READ MORE</button>
          </div>

          <div className={style.news2}>
        <p className={style.headertextfeed}>ALBUMS</p>
        <img src={Dj2} alt="Logo" className={style.logo2} />
          <p className={style.headertext}>
            TRYM realeased new album. Listen now!
          </p>
          <div className={style.likeContainer}>
            <button className={style.likeButton} onClick={handleLikeClick}>
              vote
            </button>
            <p className={style.likeCount}>{likeCount} Votes</p>
          </div>
          <button className={style.exploredj}>READ MORE</button>
          </div>

          <div className={style.news2}>
        <p className={style.headertextfeed}>FEATURES</p>
        <img src={Features} alt="Logo" className={style.logo2} />
          <p className={style.headertext2}>
            Are you ready to show your music and talent?
          </p>
         
          <button className={style.exploredj}>APPLY NOW</button>
          </div>
      </main>

      
    </header>
  );
};

export default MainPage;
