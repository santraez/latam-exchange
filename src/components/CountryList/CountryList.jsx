import { useState } from "react";
import { BiExpandVertical } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import currencies from "../../helpers/currencies";
import styles from "./CountryList.module.sass";

const CountryList = ({ country: { order, name, code, country }, setCountry }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = async (currency) => {
    setCountry(currency);
    setClicked(false);
  }
  if (clicked) {
    return (
      <div className={styles.list}>
        <div className={styles.header} onClick={() => setClicked(false)}>
          <p className={styles.text}>*** Seleccione una divisa</p>
          <RxCross2 className={styles.icons} />
        </div>
        <div className={styles.countries}>
          {
            currencies.map((currency) => (
              <div key={currency.order} className={styles.content} onClick={() => handleClick(currency)}>
                <img className={styles.flags} src={`/assets/images/${currency.order}.svg`} alt={`bandera de ${currency.country}`} />
                <p className={styles.text}>{`${currency.code} - ${currency.name}`}</p>
              </div>
            ))
          }
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.container} onClick={() => setClicked(true)}>
        <div className={styles.content}>
          <img className={styles.flags} src={`/assets/images/${order}.svg`} alt={`bandera de ${country}`} />
          <p className={styles.text}>{`${code} - ${name}`}</p>
        </div>
        <BiExpandVertical className={styles.icons} />
      </div>
    )
  }
}

export default CountryList;
