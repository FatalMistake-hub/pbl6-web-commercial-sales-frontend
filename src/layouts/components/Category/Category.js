import classNames from 'classnames/bind';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);
function Category() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('bar')}>
                <li>
                    <span className={cx('content')} >Jewelry & Accessories</span>
                </li>
                <li>
                    <span className={cx('content')}>Clothing & Shoe</span>
                </li>
                <li>
                    <span className={cx('content')}>Home & Living</span>
                </li>
                <li>
                    <span className={cx('content')}>Wedding & Party</span>
                </li>
                <li>
                    <span className={cx('content')}>Toy & Entertainment</span>
                </li>
                <li>
                    <span className={cx('content')}>Art & Collections</span>
                </li>
                <li>
                    <span className={cx('content')}>Crafting & Tool</span>
                </li>
                <li>
                    <span className={cx('content')}>Vintage</span>
                </li>
            </ul>
        </div>
    );
}

export default Category;
