import styles from "./FeatureTabs.module.css";
import Button from "../../atoms/Button/Button";

interface FeatureTabProps {
  image: string;
  title: string;
  text: string;
}

export default function FeatureTab({ image, title, text }: FeatureTabProps) {
  return (
    <div className={styles.tabContent} role="tabpanel">
     
      <figure className={styles.imageWrapper}>
        <img src={image} alt={title} />
        <div className={styles.backgroundShape}></div>

      </figure>
      

      <article className={styles.textContent}>
        <h2>{title}</h2>
        <p>{text}</p>

      </article>
    </div>
  );
}
