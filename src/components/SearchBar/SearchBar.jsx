import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Input } from 'antd';

import { cars, gui } from '../../store';
import { createFilterList } from '../../utils';
import css from './SearchBar.module.css';

export const SearchBar = () => {
    const dispatch = useDispatch();

    const allCars = useSelector(state => state.cars.allCars);
    const brandList = createFilterList(allCars).brand;
    const priceList = createFilterList(allCars).price;

    const brandFilter = useSelector(state => state.cars.brandFilter);
    const priceFilter = useSelector(state => state.cars.priceFilter);
    const mileageFromFilter = useSelector(state => state.cars.mileageFromFilter);
    const mileageToFilter = useSelector(state => state.cars.mileageToFilter);

    const [brand, setBrand] = useState(brandFilter || null);
    const [price, setPrice] = useState(priceFilter || null);
    const [mileageFrom, setMileageFrom] = useState(mileageFromFilter);
    const [mileageTo, setMileageTo] = useState(mileageToFilter);

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

    const formSubmit = e => {
        e.preventDefault();
        dispatch(cars.actions.setBrandFilter(brand));
        dispatch(cars.actions.setPriceFilter(price));
        dispatch(cars.actions.setMileageFromFilter(mileageFrom));
        dispatch(cars.actions.setMileageToFilter(mileageTo));
    };

    return (
        <form className={css.searchBar} onSubmit={e => formSubmit(e)}>
            <label className={css.fieldGroup}>
                Car brand
                <Select
                    className='searchFieldBrand'
                    options={brandList}
                    placeholder='Select car brand'
                    allowClear='true'
                    value={brand}
                    onChange={value => setBrand(value)}
                />
            </label>

            <label className={css.fieldGroup}>
                Price / 1 hour
                <Select
                    className='searchFieldPrice'
                    options={priceList}
                    placeholder='To $'
                    allowClear='true'
                    value={price}
                    onChange={value => setPrice(value)}
                    // style={{ width: 300, height: 50 }}
                />
            </label>

            <label className={css.fieldGroup}>
                Car mileage / km
                <div className={css.fieldWrapper}>
                    {/* <InputNumber
                        className='searchFieldMileageFrom'
                        placeholder='From'
                        value={mileageFrom}
                        onChange={newValue => setMileageFrom(newValue)}
                        // style={{ width: 300, height: 50 }}
                        controls='true'
                        min='0'
                    /> */}
                    {/* <InputNumber
                        className='searchFieldMileageTo'
                        placeholder='To'
                        value={mileageToFilter}
                        onChange={value => dispatch(cars.actions.setMileageToFilter(value))}
                        // style={{ width: 300, height: 50 }}
                        min='0'
                    /> */}
                    <Input className='searchFieldMileageFrom' placeholder='From' value={mileageFrom} onChange={e => setMileageFrom(e.target.value)} />

                    <Input className='searchFieldMileageTo' placeholder='To' value={mileageTo} onChange={e => setMileageTo(e.target.value)} />
                </div>
            </label>

            <button className={css.buttonSearch} type='submit'>
                Search
            </button>
        </form>
    );
};
