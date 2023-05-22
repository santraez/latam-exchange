import { useState, useRef, useEffect } from "react";
import { CountryList } from "../../components/CountryList";
import currencies from "../../helpers/currencies";
import { HiArrowsRightLeft } from "react-icons/hi2";
import styles from "./HomePage.module.sass";

const HomePage = () => {
  const [countryA, setCountryA] = useState(currencies[1]);
  const [countryB, setCountryB] = useState(currencies[3]);
  const [result, setResult] = useState(0);
  const ref = useRef(0);
  useEffect(() => {
    handleCalculate(ref.current);
  }, [countryA, countryB]);
  const handleChange = () => {
    setCountryA(countryB);
    setCountryB(countryA);
  }
  const handleCalculate = (value) => {
    const result = (value * countryA.value) / countryB.value;
    setResult(result.toFixed(5));
  }
  const handleRef = (e) => {
    ref.current = Number(e.target.value);
    handleCalculate(ref.current);
  }
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Conversor de Divisas</h1>
      <div className={styles.container}>
        <div className={styles.box}>
          <input onChange={handleRef} type="tel" className={styles.input} placeholder="Introduzca una cantidad" />
          <p className={styles.symbol}>{countryA.code}</p>
        </div>
        <CountryList country={countryA} setCountry={setCountryA} />
        <div className={styles.change} onClick={handleChange}>
          <HiArrowsRightLeft className={styles.icon} />
        </div>
        <CountryList country={countryB} setCountry={setCountryB} />
      </div>
      <div className={styles.result}>
        {
          (ref.current > 0) && (
            <>
              <p className={styles.curr1}>{`${ref.current.toFixed(2)} ${countryA.name} =`}</p>
              <p className={styles.curr2}>{`${result} ${countryB.name}`}</p>
            </>
          )
        }
        <p className={styles.exm1}>{`1 ${countryA.code} = ${(countryA.value / countryB.value).toFixed(9)}`}</p>
        <p className={styles.exm2}>{`1 ${countryB.code} = ${(countryB.value / countryA.value).toFixed(9)}`}</p>
      </div>
    </div>
  )
}

export default HomePage;
