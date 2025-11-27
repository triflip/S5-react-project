import BrowserLogo from "../../atoms/BrowserLogo/BrowserLogo";
import DottedSeparator from "../../atoms/DootedSeparator/DootedSeparator";
import Button from "../../atoms/Button/Button";

import styles from "./BrowserCard.module.css";

interface BrowserCardProps {
  logo: string;
  title: string;
  version: string;
}

export default function BrowserCard({ logo, title, version }: BrowserCardProps) {
  return (
    <article className={styles.card}>
      <BrowserLogo src={logo} alt={`${title} logo`} />

      <h3>{title}</h3>
      <p>Minimum version {version}</p>

      <DottedSeparator />

      <Button variant="blue">Add & Install Extension</Button>
    </article>
  );
}
