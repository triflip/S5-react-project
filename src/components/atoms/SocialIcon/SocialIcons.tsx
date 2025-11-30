import styles from "./SocialIcon.module.css";

function SocialIcon({ href, src, alt }) {
  return (
    <a href={href} className={styles.icon}>
      <img src={src} alt={alt} />
    </a>
  );
}

export default SocialIcon;
