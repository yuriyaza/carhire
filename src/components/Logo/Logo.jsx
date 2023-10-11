import { GiCarKey } from 'react-icons/gi';
import css from './Logo.module.css';

export const Logo = () => {
    return (
        <div className={css.logoText}>
            Car<span className={css.logoAccent}>Hire</span>
            <GiCarKey className={css.logoIcon} />
        </div>
    );
};
