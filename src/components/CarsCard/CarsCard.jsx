import { useDispatch, useSelector } from 'react-redux';
import { disablePageScroll } from 'scroll-lock';
import { cars, gui } from '../../store';
import { parseAddress, addDigitSeparator } from 'utils';

import buttonFavoriteFalse from '../../images/buttonFavoriteFalse.svg';
import buttonFavoriteTrue from '../../images/buttonFavoriteTrue.svg';
import css from './CarsCard.module.css';

export const CarsCard = ({ car }) => {
    const dispatch = useDispatch();

    const favoriteCars = useSelector(state => state.cars.favoriteCars);
    const isFavorite = favoriteCars.some(favorite => favorite.id === car.id);

    const toggleFavorite = car => {
        if (isFavorite) {
            dispatch(cars.actions.removeFromFavorite(car));
        } else {
            dispatch(cars.actions.addToFavorite(car));
        }
    };

    const openLearnMoreModal = car => {
        dispatch(cars.actions.setSelectedCar(car));
        dispatch(gui.actions.setModalOpen(true));
        disablePageScroll(document.body);
    };

    return (
        <>
            <button className={css.buttonFavorite} onClick={() => toggleFavorite(car)}>
                <img src={isFavorite ? buttonFavoriteTrue : buttonFavoriteFalse} alt='Favorite button' />
            </button>

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
