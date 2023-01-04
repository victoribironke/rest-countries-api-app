import styles from "../styles/Card.module.css";

const Card = (props) => {
  const showMore = () => {
    fetch(`https://restcountries.com/v3.1/name/${props.name}`)
      .then((res) => res.json())
      .then((resp) => {
        props.show(resp);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div onClick={showMore} className={styles.wrapper}>
      <img className={styles.img} src={props.src} alt={`${props.alt} flag`} />
      <div className={styles.details}>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.pop}>
          <span className={styles.span}>Population:</span> {props.pop}
        </p>
        <p className={styles.region}>
          <span className={styles.span}>Region:</span> {props.region}
        </p>
        <p className={styles.capital}>
          <span className={styles.span}>Capital:</span> {props.capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
