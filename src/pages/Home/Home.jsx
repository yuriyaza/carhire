import { Header, Hero } from 'components';
import heroImage from '../../images/hero.png';
import css from './Home.module.css';

export const Home = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className={css.heroDescription}>
                    <Hero />
                </div>
            </div>
            <div className={css.heroImageWrapper}>
                <img className={css.heroImage} src={heroImage} alt='CarHere - Your Rental Car' />
            </div>
        </>
    );
};
