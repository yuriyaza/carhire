import css from './Logo.module.css';
import { Link } from 'react-router-dom';
import { GiCarKey } from 'react-icons/gi';

export const Logo = () => {
    return (
        <>
            <Link className={css.logoText} to='/'>
                Car<span className={css.logoAccent}>Hire</span>
                <GiCarKey className={css.logoIcon} />
            </Link>
        </>
    );
};
