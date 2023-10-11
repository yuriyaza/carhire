import { useSelector } from 'react-redux';
import { Header, CarsList, LearnMoreModal } from 'components';

export const Favorites = () => {
    const favoriteCars = useSelector(state => state.cars.favoriteCars);
    const isModalOpen = useSelector(state => state.gui.isModalOpen);

    return (
        <>
            <Header />
            <section className='section'>
                <div className='container'>
                    <CarsList cars={favoriteCars} />
                    {isModalOpen && <LearnMoreModal />}
                </div>
            </section>
        </>
    );
};
