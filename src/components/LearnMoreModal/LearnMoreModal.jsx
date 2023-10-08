import { useDispatch, useSelector } from 'react-redux';
import { clearQueueScrollLocks, enablePageScroll } from 'scroll-lock';

import { gui } from '../../store';
import { parseAddress, parseConditions } from 'utils';

import css from './LearnMoreModal.module.css';
import btnClose from '../../images/buttonClose.svg';

export const LearnMoreModal = () => {
  const dispatch = useDispatch();

  const closeLearnMoreModal = () => {
    dispatch(gui.actions.setModalOpen(false));
    clearQueueScrollLocks();
    enablePageScroll();
  };

  const car = useSelector(state => state.cars.selectedCar);

  return (
    <div className={css.backdrop}>
      <div className={css.modalWindow}>
        <button className={css.buttonClose}>
          <img src={btnClose} alt='Close button' onClick={() => closeLearnMoreModal()} />
        </button>

        <img className={css.carImage} src={car.img} alt={car.make} />
        <p className={css.carMake}>
          {car.make} <span className={css.carModel}>{car.model}</span>, {car.year}
        </p>
        <ul className={css.carDetailsList}>
          <li className={css.carDetailFirstLine}>
            {parseAddress(car.address).city} |{parseAddress(car.address).country} | Id: {car.id} | Year: {car.year}| Type: {car.type}
          </li>
          <li className={css.carDetailSecondLine}>
            Fuel Consumption: {car.fuelConsumption} | Engine Size: {car.engineSize}
          </li>
        </ul>

        <p className={css.carDescription}>{car.description}</p>
        <p className={css.carAccessoriesTitle}>Accessories and functionalities:</p>
        <ul className={css.carAccessoriesList}>
          <li className={css.carAccessoriesFirstLine}>{car.accessories.join(' | ')}</li>
          <li className={css.carAccessoriesSecondLine}>{car.functionalities.join(' | ')}</li>
        </ul>

        <p className={css.rentalConditionsTitle}>Rental Conditions:</p>
        <ul className={css.rentalConditionsList}>
          <li className={css.rentalConditions}>{parseConditions(car.rentalConditions).minimumAge}</li>
          <li className={css.rentalConditions}>{parseConditions(car.rentalConditions).driversLicense}</li>
          <li className={css.rentalConditions}>{parseConditions(car.rentalConditions).paymentRequirements}</li>
          <li className={css.rentalConditions}>Mileage: {car.mileage}</li>
          <li className={css.rentalConditions}>Price: {car.rentalPrice}</li>
        </ul>

        <button className={css.buttonRental} type='button' onClick={()=>closeLearnMoreModal()}>
          Rental car
        </button>
      </div>
    </div>
  );
};
