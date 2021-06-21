
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Lists from "./Lists";
import { AiFillSignal } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";
import LanguagesList from "./LanguagesList";
import React from "react";
import RenderCountry from "./RenderCountry";
import useFetch from "./useFetch";

const Country = (props) => {
  const url = "https://restcountries.eu/rest/v2/all";
  const data=useFetch(url)
  const [isPopulation, setPopulation] = useState(true);
  const [value, setValue] = useState("");
  const [searchData, setSearchData] = useState([]);
 useEffect (()=> {
   setSearchData(data)
 },[data])
  const inputChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    if (value === "") {
      setSearchData(data);
    } else {
      setSearchData(
        data.filter(
          (item) =>
            item.name.toLowerCase().startsWith(value.toLowerCase()) ||
            item.capital.toLowerCase().startsWith(value.toLowerCase()) ||
            item.languages.some(i=>i.name.toLowerCase().startsWith(value.toLowerCase()))
            
        )
      );
    }
  }, [value,data]);

  const sortPopulation = data
    .slice()
    .sort((a, b) => b.population - a.population)
    .splice(0, 10);
  const countLanguage = data
    .map((item) => item.languages.map((item) => item.name))
    .flat();

  const listLang = countLanguage.reduce((total, item) => {
    total[item] = (total[item] || 0) + 1;
    return total;
  }, {});

  const sortedLang = Object.fromEntries(
    Object.entries(listLang)
      .slice()
      .sort((a, b) => b[1] - a[1])
      .splice(0, 10)
  );

  return (
    <div className="country-container-main">
      <Header count={data.length} />
      <div className="search-container">
        <input
          autoFocus
          value={value}
          onChange={inputChange}
          placeholder="Search countries by name, city and languages"
        />
        <Link smooth to="/countries#footer">
          <AiFillSignal />{" "}
        </Link>
      </div>

      <div className="render-country">
        <RenderCountry country={searchData} />
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setPopulation(true)}>Population</button>{" "}
        <button onClick={() => setPopulation(false)}>Languages</button>
        {isPopulation ? (
          <h2>10 Most populated countries in the world</h2>
        ) : (
          <h2>10 Most spoken languages in the world</h2>
        )}
        <div>
          {isPopulation ? (
            <Lists
              sum={data.reduce((sum, item) => +sum + +item.population, 0)}
              data={sortPopulation}
            />
          ) : (
            <LanguagesList key={Math.random() * 15} data={sortedLang} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Country;
