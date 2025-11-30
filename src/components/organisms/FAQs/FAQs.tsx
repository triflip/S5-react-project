import FaqItem from "../../molecules/FaqItem/FaqItem";
import styles from "./FAQS.module.css";
import Button from "../../atoms/Button/Button";

export default function FAQSection() {
  return (
    <section id="faqs" className={styles.section}>
      <article className={styles.textBlock}>
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you'd like answered,
          please feel free to email us.
        </p>
      </article>

      <div className={styles.faqList}>
        <FaqItem question="What is Bookmark?" answer="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium" />
        <FaqItem question="How can I request a new browser?" answer="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium" />
        <FaqItem question="Is there a mobile app?" answer="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium" />
        <FaqItem question="What about other Chromium browser?" answer="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium" />
      </div>

      <Button variant="blue">More info</Button>
    </section>
  );
}
