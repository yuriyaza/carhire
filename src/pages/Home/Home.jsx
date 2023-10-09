import heroImage from '../../images/hero.png';
import css from './Home.module.css';
import { Hero } from 'components';

export const Home = () => {
  return (
    <>
      <Hero />
      <img className={css.heroImage} src={heroImage} alt='CarHere - Your Rental Car' />
    </>
  );
};
