import css from './ProductCard.module.css';

export const ProductCard = ({ cars }) => {
  return (
    <>
      <ul className={css.list}>
        {cars.map(car => {
          const address = car.address.split(',');
          const city = address[address.length - 2];
          const country = address[address.length - 1];

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
                  {city} | {country} | {car.rentalCompany}
                </p>
                <p className={css.descriptionSecondLine}>
                  {car.type} | {car.make} | {car.mileage} | {car.accessories[0]}
                </p>
              </div>
              <button className={css.button} type='button'>
                Learn more
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
