import styles from "./Footer.module.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookSquare,
  FaHeart,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_newsletter}>
        <h1>Newsletter</h1>
        <div className={styles.email}>
          <input type="email" placeholder="Your email" />
          <button>Submit</button>
        </div>
      </div>
      <div className={styles.footer_info}>
        <div className={styles.left}>
          <span>
            <FaHeart /> Wonder Woman
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            maiores earum iusto quidem. Fugit distinctio aperiam unde. Eligendi,
            delectus quos veritatis illum exercitationem quaerat explicabo! Cum
            exercitationem dolores voluptatum quis?
          </p>
          <div className={styles.social}>
            <div>
              <a href="https://github.com/luanfsouza" target="_blank">
                <FaGithub />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/luan-ferreira-6b4a25181/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div>
              <FaInstagram />
            </div>
            <div>
              <FaFacebookSquare />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <ul>
            <h1>NAVIGATION</h1>
            <li>Home</li>
            <li>About us</li>
            <li>Illustrators</li>
            <li>Store</li>
            <li>Testimonials</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <h1>OUR COMMUNITY</h1>
            <li>Blog</li>
            <li>Forum</li>
            <li>Mentors</li>
          </ul>
          <ul>
            <h1>TOP CATEGORIES</h1>
            <li>1980's</li>
            <li>Marvel</li>
            <li>Manga</li>
            <li>2000's</li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <div>All rights reserved</div>
          <div className={styles.flex}>
            <div>Community</div>
            <div>Speech</div>
            <div>lorem lorem</div>
          </div>
        </div>
      </div>
    </div>
  );
}
