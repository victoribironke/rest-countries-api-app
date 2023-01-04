import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.title}>Where in the world?</p>
    </div>
  );
};

export default Header;
