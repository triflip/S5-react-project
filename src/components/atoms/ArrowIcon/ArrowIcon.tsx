import styles from "./ArrowIcon.module.css";

interface ArrowIconProps {
  open: boolean;
}

export default function ArrowIcon({ open }: ArrowIconProps) {
  return (
    <div className={open ? styles.arrowActive : styles.arrowDefault}></div>
  );
}
