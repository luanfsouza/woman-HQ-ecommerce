import styles from "./Banner.module.css";
export default function Banner() {
  return (
    <div className={styles.banner_container}>
      <div className={styles.container_wrapper}>
        {" "}
        <div className={styles.banner_1}>
          <img src="images/hq1.jpg" alt="My Awesome Image" />
        </div>
        <div className={styles.banner_1}>
          <img src="images/hq2.jpg" alt="My Awesome Image" />
        </div>
        <div className={styles.banner_1}>
          <img src="images/hq3.jpg" alt="My Awesome Image" />
        </div>
        <div className={styles.banner_1}>
          <img src="images/hq4.jpg" alt="My Awesome Image" />
        </div>
        <div className={`${styles.banner_1} ${styles.banner_dest}`}>
          <div className={styles.dest_item}>
            <img src="images/hq1.jpg" alt="My Awesome Image" />
          </div>
        </div>
        <div className={styles.banner_1}>
          <img src="images/hq2.jpg" alt="My Awesome Image" />
        </div>
        <div className={styles.banner_1}>
          <img src="images/hq3.jpg" alt="My Awesome Image" />
        </div>
        <div className={styles.banner_1}>
          <img src="images/hq2.jpg" alt="My Awesome Image" />
        </div>
        <div className={styles.banner_1}>
          <img src="images/hq4.jpg" alt="My Awesome Image" />
        </div>
        <div className={styles.banner_1}>
          <img src="images/hq2.jpg" alt="My Awesome Image" />
        </div>
        <div className={styles.banner_1}>
          <img src="images/hq1.jpg" alt="My Awesome Image" />
        </div>
        <div className={styles.banner_1}>
          <img src="images/hq3.jpg" alt="My Awesome Image" />
        </div>
      </div>
    </div>
  );
}
