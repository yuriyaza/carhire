import { useGetAllCarsQuery } from '../../api/api';
import { Navigation, CarsList, LearnMoreModal } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import css from './Catalog.module.css';
import { cars } from '../../store';
import { useGetPaginatedCarsQuery } from '../../api/api';

export const Catalog = () => {
  const dispatch = useDispatch();

  const { data: allCars } = useGetAllCarsQuery();
  const carsCount = allCars ? allCars.length : 0;

  const queryLimit = useSelector(state => state.cars.queryLimit);
  const queryPage = useSelector(state => state.cars.queryPage);
  const { data: shownCars } = useGetPaginatedCarsQuery({ queryPage, queryLimit });

  const isLoadMoreButtonEnabled = carsCount > queryLimit * queryPage;
  const isModalOpen = useSelector(state => state.gui.isModalOpen);

  return (
    <>
      <Navigation />
      <div className='container'>
        <CarsList cars={shownCars} />

        {isLoadMoreButtonEnabled && (
          <div className={css.buttonWrapper}>
            <button
              className={css.buttonLoadMore}
              onClick={() => {
                dispatch(cars.actions.setQueryPage(queryPage + 1));
              }}>
              Load more
            </button>
          </div>
        )}

        {isModalOpen && <LearnMoreModal />}
      </div>
    </>
  );
};
