import { useState } from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import IconError from "../../atoms/ErrorIcon/ErrorIcon";
import styles from "./Subscribe.module.css";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setHasError(true);
    } else {
      setHasError(false);
      console.log("Email enviat:", email);
    }
  };

  return (
    <section className={styles.subscribe}>
      <div className={styles.subscribeBackgroundShape}></div>

      <div className={styles.subscribeContainer}>
        <p>35.000+ ALREADY JOINED</p>
        <h2>Stay up-to-date with what we're doing</h2>

        <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
          <div className={styles.inputWrapper}>
            <Input
              value={email}
              onChange={(val) => setEmail(val)}
              placeholder="Enter your email address"
              required
              className={hasError ? styles.invalid : ""}
            />
            <IconError visible={hasError} />

            {hasError && (
              <>
                <IconError className={styles.errorIcon} />
                <p className={styles.errorText}>Whoops, make sure it’s an email</p>
              </>
            )}
          </div>

          <Button>Contact Us</Button>
        </form>
      </div>
    </section>
  );
}
