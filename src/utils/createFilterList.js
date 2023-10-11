export const createFilterList = carsList => {
    const filterList = {
        brand: [],
        price: [],
    };

    if (carsList) {
        const allBrands = carsList.map(car => car.make);
        const uniqueBrands = [...new Set(allBrands)].sort();
        filterList.brand = uniqueBrands.map(brand => {
            return {
                value: brand,
                label: brand,
            };
        });

        const minPrice = 10;
        const maxPrice = 500;
        const pricesItems = [];
        for (let i = minPrice; i <= maxPrice; i += 10) {
            pricesItems.push(String(i));
        }
        filterList.price = pricesItems.map(price => {
            return {
                value: price,
                label: price,
            };
        });
    }

    return filterList;
};
