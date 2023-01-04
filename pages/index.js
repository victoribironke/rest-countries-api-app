import Head from "next/head";
import Image from "next/image";
import Header from "../comps/Header";
import Search from "../comps/Search";
import Card from "../comps/Card";
import { useEffect, useState, useRef } from "react";
import Info from "../comps/Info";

const Home = () => {
  const [data, setData] = useState([]);
  const [single, setSingle] = useState([]);
  const [searchHide, setSearchHide] = useState(false);
  const [infoHide, setInfoHide] = useState(true);
  const cardDiv = useRef(null);

  const back = () => {
    cardDiv.current.id = "";
    setSearchHide(!searchHide);
    setInfoHide(!infoHide);
  };

  const details = (e) => {
    cardDiv.current.id = "hide";
    setSearchHide(!searchHide);
    setInfoHide(!infoHide);
    setSingle(e);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((resp) => {
        const newData = resp.sort((a, b) =>
          a.name.common > b.name.common ? 1 : -1
        ); // sorts the countries in alphabetical order
        setData(newData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Head>
        <title>Frontend Mentor | REST Countries API</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Search hide={searchHide} show={(e) => setData(e)} />
      {single.map((country) => {
        let langs = "";
        let curr = "";
        let nativeName = "";

        for (let key in country.languages) {
          langs += `${country.languages[key]} `;
        }
        for (let key in country.currencies) {
          curr += country.currencies[key].name;
        }
        for (let key in country.name.nativeName) {
          nativeName += country.name.nativeName[key].common;
        }

        return (
          <Info
            src={country.flags.png ? country.flags.png : country.flags.svg}
            name={country.name.common}
            native={nativeName}
            pop={country.population.toLocaleString("en-us")}
            region={country.region}
            subregion={country.subregion}
            capital={country.capital}
            tld={country.tld[0]}
            currencies={curr}
            languages={langs}
            back={back}
            hide={infoHide}
          />
        );
      })}
      <div ref={cardDiv} className="card-div">
        {data.map((dat) => (
          <Card
            src={dat.flags.png ? dat.flags.png : dat.flags.svg}
            alt={dat.name.common}
            name={dat.name.common}
            pop={dat.population.toLocaleString("en-us")}
            region={dat.region}
            capital={dat.capital}
            show={details}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
