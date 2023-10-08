import { CarsCard } from "components";
import { useSelector } from 'react-redux';
import { useGetPaginatedCarsQuery } from '../../api/api';
import css from './CarsList.module.css'

export const CarsList = () => {
    const queryLimit = useSelector(state => state.cars.queryLimit);
    const queryPage = useSelector(state => state.cars.queryPage);
  const { data: carsList } = useGetPaginatedCarsQuery({ queryPage, queryLimit });

  return (
    <>
      <ul className={css.carsList}>
        {carsList &&
          carsList.map(car => {
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
