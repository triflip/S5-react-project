
import styles from "./Hero.module.css";
import HeroImage from "../../../assets/img/illustration-hero.svg";
import Button from "../../atoms/Button/Button"

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
                    <Button variant="blue">Get it on Firefox</Button>   
                    <Button variant="white">Get it on Chrome</Button>           
</div>

            </div>

            <div className={styles.imageWrapper}>
                <img 
                src={HeroImage} 
                alt="Hero illustration" 
                />

            <div className={styles.backgroundShape}></div>

            </div>
        </section>
    );
}

export default Hero;
