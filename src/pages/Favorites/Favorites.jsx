import { useSelector } from 'react-redux';
import { Header, ProductList, DetailModal } from 'components';

export const Favorites = () => {
    const favoriteCars = useSelector(state => state.cars.favoriteCars);
    const isModalOpen = useSelector(state => state.gui.isModalOpen);

    return (
        <>
            <Header />
            <section className='section'>
                <div className='container'>
                    <ProductList cars={favoriteCars} />
                    {isModalOpen && <DetailModal />}
                </div>
            </section>
        </>
    );
};
