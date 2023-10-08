import css from './CarsCard.module.css';
import { useDispatch } from 'react-redux';
import { cars, gui } from '../../store';
import { disablePageScroll } from 'scroll-lock';
import { parseAddress, addDigitSeparator } from 'utils';

export const CarsCard = ({ car }) => {
  const dispatch = useDispatch();

  const openLearnMoreModal = car => {
    dispatch(cars.actions.setSelectedCar(car));
    dispatch(gui.actions.setModalOpen(true));
    disablePageScroll(document.body);
  };

  return (
    <>
      <img className={css.carImage} src={car.img} alt={car.make} />
      <div className={css.carCaption}>
        <p className={css.carMake}>
          {car.make} <span className={css.carModel}>{car.model}</span>, {car.year}
        </p>
        <p className={css.carPrice}>{car.rentalPrice}</p>
      </div>
      <ul className={css.carDetailsList}>
        <li className={css.carDetailsFirstLine}>
          {parseAddress(car.address).city} | {parseAddress(car.address).country} | {car.rentalCompany}
        </li>
        <li className={css.carDetailsSecondLine}>
          {car.type} | {car.make} | {addDigitSeparator(car.mileage, ',')} | {car.accessories[0]}
        </li>
      </ul>
      <button className={css.buttonLearnMore} type='button' onClick={() => openLearnMoreModal(car)}>
        Learn more
      </button>
    </>
  );
};
