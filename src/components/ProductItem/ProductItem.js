import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import { StarIcon } from '../Icons';

const cx = classNames.bind(styles);
function ProductItem() {
    return (
        <div className={cx('container')}>
            <a href="/detail" className={cx('image-link')}>
                <div className={cx('image-box')}>
                    <img
                        src="https://i.etsystatic.com/8261264/c/939/746/7/307/il/caceb6/1495657007/il_340x270.1495657007_pv76.jpg"
                        alt=""
                        className={cx('image-content')}
                    />
                </div>
            </a>
            <div className={cx('card')}>
                <h2 className={cx('card-title')}>
                    
                Womens Wool Cardigan, Wrap Coat, Maxi Cardigan, Loose Cardigan, Plus Size Coat, Minimalist Coat, Elegant Coat, Hooded Coat, Long Cardigan
        
                </h2>
                <div className={cx('card-rateAndsold')}>
                    <span className={cx('card-rate')}>
                        <span><StarIcon/> </span>
                        <span><StarIcon/> </span>
                        <span><StarIcon/> </span>
                        <span><StarIcon/> </span>
                        <span><StarIcon/> </span>
                    </span>
                    <span className={cx('card-sold')}>(1,746)</span>
                </div>
                <p className={cx('card-price')}>
                    <span className={cx('currency-value')}>3,423,645</span>
                    <span className={cx('currncy-symbol')}>₫</span>
                </p>
            </div>
            <p className={cx('shop-name')}>Doroteyya</p>
        </div>
    );
}

export default ProductItem;
