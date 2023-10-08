import { useGetCarsQuery } from '../../api/api';
import { VehicleCard, LearnMoreModal } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import css from './Catalog.module.css';
import { cars } from '../../store';

export const Catalog = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(state => state.gui.isModalOpen);
  const queryLimit = useSelector(state => state.cars.queryLimit);
  const queryPage = useSelector(state => state.cars.queryPage);

  const { data: carsList } = useGetCarsQuery({ queryPage, queryLimit });
  const carsCount = carsList ? carsList.length : 0;
  
  const isLoadMoreButtonEnabled = carsCount > (queryLimit * queryPage);
  console.log(carsCount, queryLimit, queryPage, isLoadMoreButtonEnabled);

  return (
    <>
      <div className='container'>
        <ul className={css.catalog}>
          {carsList &&
            carsList.map(car => {
              return (
                <li className={css.card} key={car.id}>
                  <VehicleCard car={car} />
                </li>
              );
            })}
        </ul>
        <div className={css.buttonWrapper}>
          <button
            className={css.buttonLoadMore}
            onClick={() => {
              dispatch(cars.actions.setQueryPage(queryPage + 1));
            }}>
            Load more
          </button>
        </div>
      </div>

      {isModalOpen && <LearnMoreModal />}
    </>
  );
};
