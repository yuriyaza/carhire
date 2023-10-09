import { NavLink } from 'react-router-dom';
import css from './Hero.module.css';

import iconInstagram from '../../images/iconInstagram.png';
import iconFacebook from '../../images/iconFacebook.png';
import iconYoutube from '../../images/iconYoutube.png';

import { Logo } from 'components';

export const Hero = () => {
  return (
    <>
      <div className={css.heroBar}>
        <div className={css.logoWrapper}>
          <Logo />
          <h1 className={css.logoCaption}>Your Rental Car</h1>
        </div>

        <NavLink className={css.buttonGetStarted} to='/catalog'>
          Get Started
        </NavLink>

        <div className={css.contacts}>
          <address className={css.address}>
            <p className={css.addressTitle}>Our Contacts:</p>
            <p>26-A, Dehtarivska str.</p>
            <p>Kyiv, Ukraine</p>
            <a className={css.phone} href='tel:+380730000000'>
              +380 73 000 00 00
            </a>
          </address>

          <ul className={css.socialsList}>
            <li className={css.socialsItem}>
              <a href='https://www.instagram.com/' target='_blank' rel='noreferrer' aria-label='Instagram page'>
                <img src={iconInstagram} width='26' height='auto' alt='Instagram logo' />
              </a>
            </li>
            <li className={css.socialsItem}>
              <a href='https://www.facebook.com/' target='_blank' rel='noreferrer' aria-label='Facebook page'>
                <img src={iconFacebook} width='24' height='auto' alt='Facebook logo' />
              </a>
            </li>
            <li className={css.socialsItem}>
              <a href='https://www.youtube.com/' target='_blank' rel='noreferrer' aria-label='YouTube chanel'>
                <img src={iconYoutube} width='26' height='auto' alt='YouTube logo' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
