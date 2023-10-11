import { NavLink } from 'react-router-dom';
import { Logo } from 'components';

import iconInstagram from '../../images/iconInstagram.png';
import iconFacebook from '../../images/iconFacebook.png';
import iconYoutube from '../../images/iconYoutube.png';
import css from './Header.module.css';

export const Header = () => {
    return (
        <>
            <div className={css.header}>
                <div className={css.logoWrapper}>
                    <Logo />
                    <p className={css.logoCaption}>Your Rental Car</p>
                </div>

                <div className={css.navigationWrapper}>
                    <NavLink className={css.navigationItem} to='/'>
                        Home
                    </NavLink>
                    <NavLink className={css.navigationItem} to='/catalog'>
                        Catalog
                    </NavLink>
                    <NavLink className={css.navigationItem} to='/favorites'>
                        Favorites
                    </NavLink>
                </div>

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
                                <img src={iconInstagram} width='24' height='auto' alt='Instagram logo' />
                            </a>
                        </li>
                        <li className={css.socialsItem}>
                            <a href='https://www.facebook.com/' target='_blank' rel='noreferrer' aria-label='Facebook page'>
                                <img src={iconFacebook} width='22' height='auto' alt='Facebook logo' />
                            </a>
                        </li>
                        <li className={css.socialsItem}>
                            <a href='https://www.youtube.com/' target='_blank' rel='noreferrer' aria-label='YouTube chanel'>
                                <img src={iconYoutube} width='24' height='auto' alt='YouTube logo' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
