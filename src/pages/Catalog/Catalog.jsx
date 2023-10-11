import { useGetAllCarsQuery } from '../../api/api';
import { Navigation, CarsList, LearnMoreModal } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import css from './Catalog.module.css';
import { cars, gui } from '../../store';
import { useGetCarsByPagesQuery } from '../../api/api';
import { createFilterList } from '../../utils';

import { useEffect } from 'react';
import { Select, InputNumber, Input } from 'antd';

export const Catalog = () => {
    const dispatch = useDispatch();

    const { data: allCars } = useGetAllCarsQuery();
    const carsCount = allCars ? allCars.length : 0;
    const brandList = createFilterList(allCars).brand;
    const priceList = createFilterList(allCars).price;

    const queryLimit = useSelector(state => state.cars.queryLimit);
    const queryPage = useSelector(state => state.cars.queryPage);
    const { currentData: carsByPages } = useGetCarsByPagesQuery({ queryPage, queryLimit });

    const paginatedCarsFromDB = useSelector(state => state.cars.paginatedCarsFromDB);
    const filteredCarsFromStore = useSelector(state => state.cars.filteredCarsFromStore);
    const isLoadMoreButtonEnabled = carsCount > queryLimit * queryPage;
    const isModalOpen = useSelector(state => state.gui.isModalOpen);

    const isFilterOn = useSelector(state => state.gui.isFilterOn);
    const brandFilter = useSelector(state => state.cars.brandFilter);
    const priceFilter = useSelector(state => state.cars.priceFilter);
    const mileageFromFilter = useSelector(state => state.cars.mileageFromFilter);
    const mileageToFilter = useSelector(state => state.cars.mileageToFilter);

    useEffect(() => {
        if (carsByPages) {
            dispatch(cars.actions.addToPaginatedCarsFromDB(carsByPages));
        }
    }, [queryPage, carsByPages, dispatch]);

    useEffect(() => {
        const filter = Boolean(brandFilter || priceFilter || mileageFromFilter || mileageToFilter);
        dispatch(gui.actions.setFilterOn(filter));
            console.log(Number(mileageToFilter));

        if (!filter || !allCars) return;

        let filteredCars = [...allCars];
        if (brandFilter) {
            filteredCars = [...filteredCars].filter(car => car.make === brandFilter);
        }
        if (priceFilter) {
            filteredCars = [...filteredCars].filter(car => Number(car.rentalPrice.replace('$', '')) <= Number(priceFilter));
        }
        if (mileageFromFilter) {
            filteredCars = [...filteredCars].filter(car => Number(car.mileage) >= Number(mileageFromFilter));
        }
        if (mileageToFilter>0) {
            filteredCars = [...filteredCars].filter(car => Number(car.mileage) <= Number(mileageToFilter));
        }

        dispatch(cars.actions.setFilteredCarsFromStore(filteredCars));
    }, [allCars, brandFilter, dispatch, mileageFromFilter, mileageToFilter, priceFilter]);

    return (
        <>
            <Navigation />
            <div className='container'>
                <Select
                    options={brandList}
                    placeholder='Select car brand'
                    allowClear='true'
                    value={brandFilter}
                    onChange={value => dispatch(cars.actions.setBrandFilter(value))}
                    style={{ width: 300, height: 50 }}
                />
                <Select
                    options={priceList}
                    placeholder='To $'
                    allowClear='true'
                    value={priceFilter}
                    onChange={value => dispatch(cars.actions.setPriceFilter(value))}
                    style={{ width: 300, height: 50 }}
                />

                <InputNumber
                    placeholder='From'
                    value={mileageFromFilter}
                    onChange={value => dispatch(cars.actions.setMileageFromFilter(value))}
                    style={{ width: 300, height: 50 }}
                    controls='false'
                    min='0'
                />

                <InputNumber
                    placeholder='To'
                    value={mileageToFilter}
                    onChange={value => dispatch(cars.actions.setMileageToFilter(value))}
                    style={{ width: 300, height: 50 }}
                    min='0'
                />

                <CarsList cars={isFilterOn ? filteredCarsFromStore : paginatedCarsFromDB} />
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
