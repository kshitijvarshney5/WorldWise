/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./../components/Message";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isloading } = useCities();
  if (isloading) return <Spinner />;

  if (!cities.length)
    return <Message message="add your first city by lcikcing on the map" />;
  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
