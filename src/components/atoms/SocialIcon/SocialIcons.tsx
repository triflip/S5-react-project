import styles from "./SocialIcons.module.css";

interface SocialIconProps {
  href: string;
  src: string;
  alt: string;
}

function SocialIcon({ href, src, alt }: SocialIconProps) {
  return (
    <a href={href} className={styles.icon}>
      <img src={src} alt={alt} />
    </a>
  );
}

export default SocialIcon;
