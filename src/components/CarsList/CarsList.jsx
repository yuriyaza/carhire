import { CarsCard } from "components";
import css from './CarsList.module.css'

export const CarsList = ({ cars }) => {
  return (
    <>
      <ul className={css.carsList}>
        {cars &&
          cars.map(car => {
            return (
              <li className={css.carsCard} key={car.id}>
                <CarsCard car={car} />
              </li>
            );
          })}
      </ul>
    </>
  );
};
