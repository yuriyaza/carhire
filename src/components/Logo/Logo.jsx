import { GiCarKey } from 'react-icons/gi';
import css from './Logo.module.css';

export const Logo = () => {
    return (
        <>
            <div className={css.logo}>
                <span className={css.logoPartCar}>Car</span>
                <span className={css.logoPartHire}>Hire</span>
                <GiCarKey className={css.logoIcon} />
            </div>
            <p className={css.slogan}>Your Rental Car</p>
        </>
    );
};
