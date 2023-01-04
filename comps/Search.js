import Image from "next/image";
import { useState, useRef } from "react";
import styles from "../styles/Search.module.css";

const Search = (props) => {
  const [data, setData] = useState([]);
  const inputEl = useRef(null);
  const select = useRef(null);

  const getRegion = () => {
    if (select.current.value != "") {
      fetch(
        `https://restcountries.com/v3.1/region/${select.current.value.toLowerCase()}`
      )
        .then((res) => res.json())
        .then((resp) => {
          const newData = resp.sort((a, b) =>
            a.name.common > b.name.common ? 1 : -1
          );
          props.show(newData);
        })
        .catch((err) => console.error(err));
      return;
    }
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((resp) => {
        const newData = resp.sort((a, b) =>
          a.name.common > b.name.common ? 1 : -1
        );
        props.show(newData);
      })
      .catch((err) => console.error(err));
  };

  const getArea = () => {
    if (inputEl.current.value != "") {
      fetch(`https://restcountries.com/v3.1/name/${inputEl.current.value}`)
        .then((res) => res.json())
        .then((resp) => {
          setData(resp);
          props.show(data);
        })
        .catch((err) => console.error(err));
      return;
    }

    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((resp) => {
        const newData = resp.sort((a, b) =>
          a.name.common > b.name.common ? 1 : -1
        );
        setData(newData);
        props.show(newData);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={styles.wrapper} id={props.hide ? "hide" : ""}>
      <div className={styles.inputWrapper}>
        <input
          onChange={getArea}
          ref={inputEl}
          className={styles.input}
          type="text"
          placeholder="Search for a country..."
        />
        <Image
          className={styles.img}
          src="/search-icon.svg"
          alt="search"
          width={20}
          height={20}
        />
      </div>
      <select ref={select} className={styles.select} onChange={getRegion}>
        <option className={styles.option} value="">
          Filter By Region
        </option>
        <option className={styles.option} value="Africa">
          Africa
        </option>
        <option className={styles.option} value="America">
          America
        </option>
        <option className={styles.option} value="Asia">
          Asia
        </option>
        <option className={styles.option} value="Europe">
          Europe
        </option>
        <option className={styles.option} value="Oceania">
          Oceania
        </option>
      </select>
    </div>
  );
};

export default Search;
