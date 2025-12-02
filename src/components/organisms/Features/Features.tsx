import React from "react";
import styles from "./Features.module.css";
import TabButton from "../../atoms/TabButton.tsx/TabButton";        
import FeatureTab from "../../molecules/FeatureTab/FeatureTabs";    

import ImgTab1 from "../../../assets/img/illustration-features-tab-1.svg";
import ImgTab2 from "../../../assets/img/illustration-features-tab-2.svg";
import ImgTab3 from "../../../assets/img/illustration-features-tab-3.svg";

const featuresData = [
  {
    id: 1,
    tabLabel: "Simple Bookmarking",
    image: ImgTab1,
    title: "Bookmark in one click",
    text:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    id: 2,
    tabLabel: "Speedy Searching",
    image: ImgTab2,
    title: "Intelligent search",
    text:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    id: 3,
    tabLabel: "Easy Sharing",
    image: ImgTab3,
    title: "Share your bookmarks",
    text:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

export default function Features() {
    const [activeTab, setActiveTab] = React.useState<number>(1);

      return (
    <section id="features" aria-label="Features section" className={styles.features}>
      
      <article className={styles.headerText}>
        <h3>Features</h3>
        <p>
          Our aim is to make it quick and easy for you to access your favourite websites. Open a new browser
          tab and see your sites load instantly.
        </p>
      </article>

    
      <div className={styles.tabs}>
        {featuresData.map((f) => (
          <TabButton
            key={f.id}
            label={f.tabLabel}
            active={f.id === activeTab}
            onClick={() => setActiveTab(f.id)}
          />
        ))}
      </div>



      <div className={styles.tabPanel}>
        {featuresData.map(
          (f) =>
            f.id === activeTab && (
              <FeatureTab key={f.id} image={f.image} title={f.title} text={f.text} />
            )
        )}
      </div>
    </section>
  );
}
