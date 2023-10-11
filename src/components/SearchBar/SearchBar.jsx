import { Select, InputNumber } from 'antd';
import { createFilterList } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { cars, gui } from '../../store';
import { useEffect } from 'react';
// import css from './SearchBar.module.css';

export const SearchBar = () => {
    const dispatch = useDispatch();

    const allCars = useSelector(state => state.cars.allCars);
    const brandList = createFilterList(allCars).brand;
    const priceList = createFilterList(allCars).price;
   
    const brandFilter = useSelector(state => state.cars.brandFilter);
    const priceFilter = useSelector(state => state.cars.priceFilter);
    const mileageFromFilter = useSelector(state => state.cars.mileageFromFilter);
    const mileageToFilter = useSelector(state => state.cars.mileageToFilter);

useEffect(() => {
    const filter = Boolean(brandFilter || priceFilter || mileageFromFilter || mileageToFilter);
    dispatch(gui.actions.setFilterStatus(filter));

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
    if (mileageToFilter > 0) {
        filteredCars = [...filteredCars].filter(car => Number(car.mileage) <= Number(mileageToFilter));
    }

    dispatch(cars.actions.setFilteredCarsFromStore(filteredCars));
}, [allCars, brandFilter, dispatch, mileageFromFilter, mileageToFilter, priceFilter]);

    return (
        <>
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
        </>
    );
};
