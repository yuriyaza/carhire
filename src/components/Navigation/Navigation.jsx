import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { Logo } from 'components';

export const Navigation = () => {
    return (
        <nav className={css.navigationBar}>
            <div className={css.navigationWrapper}>
                <Logo />
            </div>
            <div className={css.navigationWrapper}>
                <NavLink className={css.navigationItem} to='/catalog'>
                    Catalog
                </NavLink>
                <NavLink className={css.navigationItem} to='/favorites'>
                    Favorites
                </NavLink>
            </div>
        </nav>
    );
};
