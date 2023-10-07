import { useGetCarsQuery } from '../../services/api';
import { ProductCard } from 'components/ProductCard';

export const Catalog = () => {
  const { data: carsData } = useGetCarsQuery();

  return (
    <div className='container'>
      {carsData && <ProductCard cars={carsData} />}
    </div>
  );
};
