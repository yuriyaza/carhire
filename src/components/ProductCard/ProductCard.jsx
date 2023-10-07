import css from './ProductCard.module.css';
import { useDispatch } from 'react-redux';
import { cars, gui } from '../../store';
import { disablePageScroll } from 'scroll-lock';
import { parseAddress } from 'utils';

export const ProductCard = ({ carsList }) => {
  const dispatch = useDispatch();

  const openDetailModal = car => {
    dispatch(cars.actions.setSelectedCar(car));
    dispatch(gui.actions.setModalOpen(true));
    disablePageScroll(document.body);
  };

  return (
    <>
      <ul className={css.list}>
        {carsList.map(car => {
          return (
            <li className={css.card} key={car.id}>
              <img className={css.image} src={car.img} alt={car.make} />
              <div className={css.caption}>
                <p className={css.make}>
                  {car.make} <span className={css.model}>{car.model}</span>, {car.year}
                </p>
                <p className={css.price}>{car.rentalPrice}</p>
              </div>
              <div className={css.description}>
                <p className={css.descriptionFirstLine}>
                  {parseAddress(car.address).city} | {parseAddress(car.address).country} | {car.rentalCompany}
                </p>
                <p className={css.descriptionSecondLine}>
                  {car.type} | {car.make} | {car.mileage} | {car.accessories[0]}
                </p>
              </div>
              <button className={css.button} type='button' onClick={() => openDetailModal(car)}>
                Learn more
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
