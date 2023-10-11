import { Navigation, CarsList, LearnMoreModal } from 'components';
import { useSelector } from 'react-redux';

export const Favorites = () => {
    const favoriteCars = useSelector(state => state.cars.favoriteCars);
    const isModalOpen = useSelector(state => state.gui.isModalOpen);

    return (
        <>
            <Navigation />

            <div className='container'>
                <CarsList cars={favoriteCars} />
                {isModalOpen && <LearnMoreModal />}
            </div>
        </>
    );
};
