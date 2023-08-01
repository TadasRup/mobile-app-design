import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../../components/css/Mainpage.module.css';
import companyLogo from '../../img/prodtech.png';
import Dj1 from '../../img/ellenallien.jpg';
import tomorrow from '../../img/tland.webp';
import Dj2 from '../../img/dj2.jpg';
import Features from '../../img/dj1.jpg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoExitOutline } from 'react-icons/io';

const MainPage = () => {
  const [likeCount, setLikeCount] = useState(() => JSON.parse(localStorage.getItem('logo')) ||998);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  const handleLikeClick = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Step 2: Toggle the menu state
  };



  return (
    <header>
       <div className={style.mainheader}>
        <img src={companyLogo} alt="Logo" className={style.logo} />
        {isMenuOpen ? (
          <div className={style.burgermenu}>
            <Link type="submit" className={style.burgertext} to="/ShoppingCarts">
                Shopping carts
             </Link>
             <Link type="submit" className={style.burgertext} to="/ProductCatalog">
                Product catalog
             </Link>
             <Link type="submit" className={style.burgertext} to="/Shops">
                Shops
             </Link>
             <h1>--------------</h1>
             <Link type="submit" className={style.burgertext} to="/NewShoppingCarts">
                New shopping cart
             </Link>
             <Link type="submit" className={style.burgertext}  to="/NewProduct">
                New product
             </Link>
             <Link type="submit" className={style.burgertext} to="/NewShop">
                New shop
             </Link>
             <h1>--------------</h1>
             <Link type="submit" className={style.burgertext} to="/Account">
                Account
             </Link>
             <Link type="submit" className={style.burgertext} to="/Settings">
                Settings
             </Link>
             <Link type="submit"className={style.burgertext}  to="/Login">
                Sign out
             </Link>
          </div>
        ) : (
          <RxHamburgerMenu
            className={style.burger}
            size="2.9rem"
            color="black"
            onClick={handleMenuToggle}
          />
        )}
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
