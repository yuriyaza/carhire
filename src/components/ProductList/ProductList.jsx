import { ProductCard } from 'components';
import css from './ProductList.module.css';

export const ProductList = ({ cars }) => {
    return (
        <>
            <ul className={css.carsList}>
                {cars &&
                    cars.map(car => {
                        return (
                            <li className={css.carsCard} key={car.id}>
                                <ProductCard car={car} />
                            </li>
                        );
                    })}
            </ul>
        </>
    );
};
