import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cars } from '../../store';
import { useGetAllCarsQuery, useGetPaginatedCarsQuery } from '../../api/api';
import { Header, ProductList, DetailModal, SearchBar } from 'components';
import css from './Catalog.module.css';

export const Catalog = () => {
    const dispatch = useDispatch();

    const { data: allCars } = useGetAllCarsQuery();
    const carsCount = allCars ? allCars.length : 0;

    const queryLimit = useSelector(state => state.cars.queryLimit);
    const queryPage = useSelector(state => state.cars.queryPage);
    const { data: paginatedCarsFromDB } = useGetPaginatedCarsQuery({ queryPage, queryLimit });

    const isFilterOn = useSelector(state => state.gui.isFilterOn);
    const filteredCarsFromStore = useSelector(state => state.cars.filteredCarsFromStore);

    const isLoadMoreButtonEnabled = carsCount > queryLimit * queryPage;
    const isModalOpen = useSelector(state => state.gui.isModalOpen);

    useEffect(() => {
        dispatch(cars.actions.setAllCars(allCars));
    }, [allCars, dispatch]);

    return (
        <>
            <Header />
            <section className='section'>
                <div className='container'>
                    <SearchBar />

                    <ProductList cars={isFilterOn ? filteredCarsFromStore : paginatedCarsFromDB} />
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
                    {isModalOpen && <DetailModal />}
                </div>
            </section>
        </>
    );
};
