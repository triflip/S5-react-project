
import styles from "./Hero.module.css";
import HeroImage from "../../../assets/img/illustration-hero.svg";

function Hero() {
    return (
        <section className={styles.hero}>
           
            <div className={styles.textContent}>
                <h1>A Simple Bookmark Manager</h1>
                <p>
                    A clean and simple interface to organize your favourite websites. 
                    Open a new browser tab and see your sites load instantly. Try it for free.
                </p>

                <div className={styles.buttons}>
                    <button className={styles.btnPrimary}>Get it on Chrome</button>
                    <button className={styles.btnSecondary}>Get it on Firefox</button>
                </div>
            </div>

            <div className={styles.imageWrapper}>
                <img src={HeroImage} alt="Hero illustration" />
            </div>
        </section>
    );
}

export default Hero;
