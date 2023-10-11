import { IoCarSportOutline } from 'react-icons/io5';
import { HiOutlineReceiptPercent } from 'react-icons/hi2';
import { TbUserCheck } from 'react-icons/tb';
import css from './Hero.module.css';

export const Hero = () => {
    return (
        <ul className={css.advantagesList}>
            <li className={css.advantagesItem}>
                <IoCarSportOutline className={css.advantagesIcon} />
                <h2 className={css.advantagesTitle}>Actual Proposals</h2>
                <p className={css.advantagesDescription}>Explore our current proposals and start reservations to find the right car for you</p>
            </li>
            <li className={css.advantagesItem}>
                <HiOutlineReceiptPercent className={css.advantagesIcon} />
                <h2 className={css.advantagesTitle}>Bonus Program</h2>
                <p className={css.advantagesDescription}>You can accumulate bonuses and use them on your next car reservations</p>
            </li>
            <li className={css.advantagesItem}>
                <TbUserCheck className={css.advantagesIcon} />
                <h2 className={css.advantagesTitle}>Business Rentals</h2>
                <p className={css.advantagesDescription}>Our special offers for business clients will allow you to save time and money</p>
            </li>
        </ul>
    );
};

//
//

// Benefit programYou can accumulate bonuses and use them on your next car reservations

// Business Rentals
// Our special offers for business clients will allow you to save time and money
