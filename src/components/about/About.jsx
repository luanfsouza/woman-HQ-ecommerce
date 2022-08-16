import styles from './About.module.css'
export default function About(){
    return (
      <section className={styles.about_container}>
        <div className={styles.about_img}>
          <img src="images/group.jpg" />
        </div>
        <div className={styles.about_info}>
          <span>ABOUT US</span>
          <h1>Wonder Woman.</h1>
          <p>
            lorem lorem Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Iste est reiciendis officia aspernatur ex fugit, cupiditate
            ipsum quibusdam nobis, aliquid minus! Eligendi, recusandae.
            Inventore, eligendi odio dolores beatae ipsum vitae? Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Nobis tenetur non
            tempora quam dignissimos hic fugit cupiditate nostrum veritatis
            quos, exercitationem temporibus atque ea commodi officia praesentium
            obcaecati eveniet laborum quia porro culpa animi unde tempore.
          </p>
          <button>LEARN MORE</button>
        </div>

        <div className={styles.illustrators_info}>
          <span>OUR</span>
          <h1>Illustrators</h1>
          <p>
            lorem lorem Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Iste est reiciendis officia aspernatur ex fugit, cupiditate
            ipsum quibusdam nobis, aliquid minus! Eligendi, recusandae.
            Inventore, eligendi odio dolores beatae ipsum vitae? Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Nobis tenetur non
            tempora quam dignissimos hic fugit cupiditate nostrum veritatis
            quos, exercitationem temporibus atque ea commodi officia praesentium
            obcaecati eveniet laborum quia porro culpa animi unde tempore.
          </p>
        </div>
        <div className={styles.illustrators_banner}>

        </div>
      </section>
    );
}