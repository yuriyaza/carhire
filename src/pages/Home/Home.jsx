import { Header, Hero } from 'components';
import heroImage from '../../images/hero.png';
import css from './Home.module.css';

export const Home = () => {
    return (
        <>
            <Header />
            <section className='section'>
                <div className='container'>
                    <Hero />
                </div>
                <div className={css.imageWrapper}>
                    <img className={css.heroImage} src={heroImage} alt='CarHere - Your Rental Car' />
                </div>
            </section>
        </>
    );
};
