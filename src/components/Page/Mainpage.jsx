import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Mainpage.module.css';
import companyLogo from '../../img/prodtech.png';
import Dj1 from '../../img/ellenallien.jpg';
import tomorrow from '../../img/tland.webp';
import Dj3 from '../../img/prodtech.png';

const MainPage = () => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  return (
    <header>
      <div className={style.mainheader}>
        <img src={companyLogo} alt="Logo" className={style.logo} />
        <Link className={style.logoutbutton} to="/FirstPage">
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
            TOMORROWLAND 2023 had visited people vistited!
          </p>
          <div className={style.likeContainer}>
            <button className={style.likeButton} onClick={handleLikeClick}>
              vote
            </button>
            <p className={style.likeCount}>{likeCount} Votes</p>
          </div>
          <button className={style.exploredj}>READ MORE</button>
          </div>
      </main>
    </header>
  );
};

export default MainPage;
