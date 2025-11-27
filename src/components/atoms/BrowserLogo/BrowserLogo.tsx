import styles from "./BrowserLogo.module.css"

interface BrowserLogoProps {
    src: string;
    alt: string;
}


export default function BrowserLogo({ src, alt }: BrowserLogoProps) {
    return <img className={styles.logo} src={src} alt={alt} />;
}