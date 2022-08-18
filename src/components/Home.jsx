import styles from "./Home.module.css";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import {FaGithub,FaLinkedinIn,FaInstagram, FaFacebookSquare} from 'react-icons/fa'
import Banner from "./Banner";
import { useState } from "react";
export default function HomePage() {
    const [active,setActive]=useState('')
    function toggleMenu(){
        if(active === ''){
            setActive('active')
            return
        } else{setActive('')}
    }
  return (
    <div className={styles.home_container}>
      <header className={`${styles.home_nav} }`}>
        <nav>
          <div className={`${styles.navbar} ${styles[active]}`}>
            <div className={styles.nav_logo}>
              <img src="images/spiral-logo2.png" />
            </div>

            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Ilustrators</li>
              <li>Store</li>
              <li>Gallery</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className={`${styles.nav_user}  ${styles[active]}`}>
            <ul>
              <li>
                <FaShoppingCart />
              </li>
              <li>
                <FaSearch />
              </li>
              <li className={styles.singin}>SING IN</li>
              <button className={styles.btn_mobile} onClick={toggleMenu}>
                <span className={styles.hamburger}></span>
              </button>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className={styles.main_text}>
          <h1>DISCOVER THE VIOLET WORLD</h1>
          <h4>THE BEST FEMALE COMICS IN ONE PLEASE!</h4>
          <div className={styles.main_textBtn}>
            <button className={styles.btnLeft}>
              TRY VIOLET UNLIMITED FOR FREE
            </button>
            <button className={styles.btnRight}>SUBSCRIBE NOW</button>
          </div>
          <p>
            Start your 7-days free trial and get acess to over 20.000 digital
            comics then only $9.99/month. Cancel Anytime.
          </p>
        </div>
        <div className={styles.banner}>
          <Banner />
        </div>
        <div className={styles.main_logos}>
          <div>
            <FaFacebookSquare />
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/luan-ferreira-6b4a25181/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <a
            href="https://github.com/luanfsouza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <FaInstagram />
        </div>
      </main>
    </div>
  );
}
