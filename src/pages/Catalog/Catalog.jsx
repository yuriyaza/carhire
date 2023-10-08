import { useGetAllCarsQuery } from '../../api/api';
import { CarsList, LearnMoreModal } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import css from './Catalog.module.css';
import { cars } from '../../store';

export const Catalog = () => {
  const dispatch = useDispatch();

  const { data: allCarsList } = useGetAllCarsQuery();
  const carsCount = allCarsList ? allCarsList.length : 0;
  const queryLimit = useSelector(state => state.cars.queryLimit);
  const queryPage = useSelector(state => state.cars.queryPage);
  const isLoadMoreButtonEnabled = carsCount > queryLimit * queryPage;

  const isModalOpen = useSelector(state => state.gui.isModalOpen);


  return (
    <div className='container'>
      <CarsList />

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
  );
};
