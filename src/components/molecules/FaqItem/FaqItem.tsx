import { useState } from "react";
import ArrowIcon from "../../atoms/ArrowIcon/ArrowIcon";
import styles from "./FaqItem.module.css";

interface FaqItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function FaqItem({ question, answer, defaultOpen = false }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <details className={styles.faqItem} open={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <summary>
        {question}
        <ArrowIcon open={!isOpen} />
      </summary>
      <p>{answer}</p>
    </details>
  );
}
