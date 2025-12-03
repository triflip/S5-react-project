import BrowserCard from "../../molecules/BrowserCard/BrowserCard";

import ChromeLogo from "../../../assets/img/logo-chrome.svg";
import FirefoxLogo from "../../../assets/img/logo-firefox.svg";
import OperaLogo from "../../../assets/img/logo-opera.svg";

import styles from "./Download.module.css";

export default function ExtensionSection() {
  return (
    <section id="download" className={styles.section}>
      <article className={styles.textBlock}>
        <h2>Download the extension</h2>
        <p>
          We've got more browsers in the pipeline. Please do let us know 
          if you've got a favourite you'd like us to prioritize.
        </p>
      </article>

      <div className={styles.cards}>
    
        <BrowserCard
          logo={ChromeLogo}
          title="Add to Chrome"
          version="62"
        />

        <BrowserCard
          logo={FirefoxLogo}
          title="Add to Firefox"
          version="55"
        />

        <BrowserCard
          logo={OperaLogo}
          title="Add to Opera"
          version="46"
        />
      </div>
    </section>
  );
}
