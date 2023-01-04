import styles from "../styles/Info.module.css";

const Info = (props) => {
  return (
    <div className={styles.wrapper} id={props.hide ? "hide" : ""}>
      <div className={styles.back} onClick={props.back}>
        <img className={styles.backImg} src="/back-icon.svg" alt="back" /> Back
      </div>
      <div className={styles.div1}>
        <img className={styles.img} src={props.src} alt="flag" />
        <div className={styles.div2}>
          <p className={styles.name}>{props.name}</p>
          <div className={styles.div3}>
            <div className={styles.div4}>
              <p className={`${styles.native} ${styles.detail}`}>
                <span>Native Name:</span> {props.native}
              </p>
              <p className={`${styles.pop} ${styles.detail}`}>
                <span>Populaton:</span> {props.pop}
              </p>
              <p className={`${styles.reg} ${styles.detail}`}>
                <span>Region:</span> {props.region}
              </p>
              <p className={`${styles.subreg} ${styles.detail}`}>
                <span>Sub Region:</span> {props.subregion}
              </p>
              <p className={`${styles.capital} ${styles.detail}`}>
                <span>Capital:</span> {props.capital}
              </p>
            </div>
            <div className={styles.div5}>
              <p className={`${styles.tld} ${styles.detail}`} id={styles.tld}>
                <span>Top Level Domain:</span> {props.tld}
              </p>
              <p className={`${styles.curr} ${styles.detail}`}>
                <span>Currencies:</span> {props.currencies}
              </p>
              <p className={`${styles.langs} ${styles.detail}`}>
                <span>Languages:</span> {props.languages.split(" ").join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
