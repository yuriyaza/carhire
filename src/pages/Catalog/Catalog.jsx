import { useGetCarsQuery } from '../../api/api';
import { ProductCard, Modal } from 'components';
import { useSelector } from 'react-redux';

export const Catalog = () => {
  const { data: carsList } = useGetCarsQuery();
  const isModalOpen = useSelector(state => state.gui.isModalOpen);

  return (
    <>
      <div className='container'>{carsList && <ProductCard carsList={carsList} />}</div>

      {isModalOpen && <Modal />}
    </>
  );
};
