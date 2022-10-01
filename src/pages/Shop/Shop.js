import classNames from 'classnames/bind';
import { Carousel } from 'react-carousel-minimal';
import Button from '~/components/Button';
import { SearchIcon } from '~/components/Icons';
import ProductItem from '~/components/ProductItem';
import Search from '~/layouts/components/Search';

import styles from './Shop.module.scss';

const cx = classNames.bind(styles);

function Shop() {
    const dataImage = [
        {
            image: 'https://i.etsystatic.com/isbl/b08775/36148557/isbl_3360x840.36148557_fbrujjid.jpg?version=0',
        },
        {
            image: 'https://i.etsystatic.com/6087155/r/il/a23943/840997306/il_794xN.840997306_4pn0.jpg',
        },
        {
            image: 'https://i.etsystatic.com/6087155/r/il/72563a/840783023/il_794xN.840783023_e1ex.jpg',
        },
        {
            image: 'https://i.etsystatic.com/6087155/c/1500/1191/0/33/il/f55f8d/840970050/il_794xN.840970050_aabq.jpg',
        },
        {
            image: 'https://i.etsystatic.com/6087155/r/il/ef8d7a/840988070/il_794xN.840988070_mcar.jpg',
        },
        {
            image: 'https://i.etsystatic.com/6087155/r/il/1453d1/2735501475/il_794xN.2735501475_350q.jpg',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('shop-panel')}>
                <Carousel
                    data={dataImage}
                    time={3000}
                    width="100%"
                    height="475px"
                    // radius="10px"
                    slideNumber={false}
                    captionPosition="bottom"
                    automatic={true}
                    dots={false}
                    pauseIconColor="darkgray"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    style={{
                        top: '0',
                        left: '0',
                    }}
                />
            </div>
            <div className={cx('shop-home')}>
                <div className={cx('shop-home-header')}>
                    <div className={cx('shop-home-header-box')}>
                        <div className={cx('shop-home-header-banner')}>
                            <div className={cx('shop-home-header-banner-content')}>
                                <div className={cx('shop-home-image')}>
                                    <img
                                        src="https://i.etsystatic.com/isla/0d943f/24592470/isla_500x500.24592470_8hq0chzw.jpg?version=0"
                                        className={cx('shop-home-image-data')}
                                        alt=""
                                    />
                                </div>
                                <div className={cx('shop-home-info')}>
                                    <div className={cx('shop-home-info-title')}>
                                        <h1 className={cx('shop-home-name')}>TheBeardedBee</h1>
                                        <p className={cx('shop-home-category')}>Vintage + Recycled Clothing</p>
                                    </div>
                                    <div className={cx('shop-home-info-more')}>
                                        <div className={cx('shop-home-placement')}>
                                            <span className={cx('shop-home-placement-text')}>
                                                Georgia, United States
                                            </span>
                                        </div>
                                        <div className={cx('shop-home-soldAndrate')}>
                                            <span className={cx('sold-content')}>51,592 sales</span>
                                            <span className={cx('septum')}>|</span>
                                            <span className={cx('rate')}>
                                                <a href="" className={cx('rate-page')}>
                                                    <span className={cx('rate-content')}></span>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('shop-home-header-banner-owner')}>
                                <div className={cx('shop-home-owner')}>
                                    <a href=" " className={cx('shop-home-owner-link')}>
                                        <img
                                            src="https://i.etsystatic.com/iusa/2caca1/90655985/iusa_75x75.90655985_o05l.jpg?version=0"
                                            alt=""
                                            className={cx('shop-home-owner-image')}
                                        />
                                        <p>Sara</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('shop-home-follow')}>
                    <div className={cx('shop-home-follow-box')}>
                        <div className={cx('shop-home-follow-button')}>
                            <Button rounded large>
                                Follow shop
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={cx('shop-home-body')}>
                    <div className={cx('shop-home-body-box')}>
                        <div className={cx('shop-home-announcement')}>
                            <div className={cx('shop-home-announcement-box')}>
                                <div className={cx('shop-home-announcement-title')}>
                                    <h2 className={cx('shop-home-announcement-title-text')}>Announcement</h2>
                                </div>
                                <div className={cx('shop-home-announcement-update')}>
                                    Last update on
                                    <span>Sep 14, 2022</span>
                                </div>
                            </div>
                            <div className={cx('shop-home-announcement-content')}>
                                <p className={cx('announcement-content-short')}>
                                    <span className={cx('announcement-content-full')}>
                                        Hey guys! If you are ordering a distressed or bleached flannel, please make sure
                                        to read the entire listing description and instructions so that your order turns
                                        out the way you want it. Order 1 size up from your normal t-shirt size to get an
                                        oversized fit. This is our busiest time of year so please keep in mind that some
                                        orders may ship later than expected, depending on whether or not you have color
                                        requests. INTERNATIONAL SHIPMENTS: - International orders outside the US are
                                        taking a MINIMUM of 4 weeks to arrive right now due to a combination of COVID
                                        protocols and a lack of international flights. - We are no longer shipping to
                                        Ukraine, Mexico, Germany, France or Israel - Australia is not accepting First
                                        Class mail from the US so shipping prices to Australia unfortunately will be
                                        higher than usual because we have to use a different service. LIKE OUR MERCH??
                                        Sign up to receive coupon codes here: http://bit.ly/2n2FVxo **Click the
                                        confirmation email so the codes can be sent to your inbox! (( Website ))
                                        www.thebeardedbee.us (( Connect With Us )) FACEBOOK: thebeardedbee TUMBLR:
                                        thebeardedbee INSTAGRAM: thebeardedbee TWITTER: beardedbee
                                    </span>
                                </p>
                                <a href="" className={cx('shop-home-announcement-toggle')}>
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div className={cx('shop-home-listing')}>
                            <div className={cx('shop-home-listing-header')}>
                                <div className={cx('shop-home-listing-header-title')}>
                                    <h2>Items</h2>
                                </div>
                                <div className={cx('shop-home-listing-header-sort')}>
                                    <Button rounded large className={cx('shop-home-listing-header-sort-button')}>
                                        Sort Custom
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('shop-home-listing-body')}>
                                <div className={cx('shop-home-listing-category')}>
                                    <div className={cx('shop-home-listing-category-search')}>
                                        <input type="text" className={cx('shop-home-search-input')} />
                                        <button className={cx('shop-home-search-button')}>
                                            <span className={cx('shop-home-search-button-icon')}>
                                                <SearchIcon />
                                            </span>
                                        </button>
                                    </div>
                                    <div className={cx('shop-home-listing-category-container')}>
                                        <ul className={cx('category-container-list')}>
                                            <button className={cx('category-container-list-item')}>
                                                <span className={cx('category-container-list-item-text')}>ALL</span>
                                                <span className={cx('category-container-list-item-text')}>70</span>
                                            </button>
                                            <button className={cx('category-container-list-item')}>
                                                <span className={cx('category-container-list-item-text')}>
                                                    SWEATERS
                                                </span>
                                                <span className={cx('category-container-list-item-text')}>15</span>
                                            </button>
                                            <button className={cx('category-container-list-item')}>
                                                <span className={cx('category-container-list-item-text')}>ALL</span>
                                                <span className={cx('category-container-list-item-text')}>70</span>
                                            </button>
                                            <button className={cx('category-container-list-item')}>
                                                <span className={cx('category-container-list-item-text')}>
                                                    SWEATERS
                                                </span>
                                                <span className={cx('category-container-list-item-text')}>15</span>
                                            </button>
                                            <button className={cx('category-container-list-item')}>
                                                <span className={cx('category-container-list-item-text')}>ALL</span>
                                                <span className={cx('category-container-list-item-text')}>70</span>
                                            </button>
                                            <button className={cx('category-container-list-item')}>
                                                <span className={cx('category-container-list-item-text')}>
                                                    SWEATERS
                                                </span>
                                                <span className={cx('category-container-list-item-text')}>15</span>
                                            </button>
                                        </ul>
                                    </div>
                                </div>
                                <div className={cx('shop-home-listing-container')}>
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('shop-home-review')}>
                    <div className={cx('shop-home-review-box')}>
                        <div className={cx('shop-home-review-tittle')}>Reviews</div>
                        <div className={cx('shop-home-review-container')}>
                            <div className={cx('review-totalAndsort')}>
                                <div className={cx('review-total')}>
                                    <span className={cx('review-total-tittle')}>Average item review</span>
                                    <span className={cx('review-total-text')}>(7978)</span>
                                </div>
                                <div className={cx('review-sort')}>
                                    <Button large rounded>
                                        Sort by: Recommended
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('review-item')}>
                                <div className={cx('review-item-account')}>
                                    <img
                                        src="https://i.etsystatic.com/iusa/e6bec4/8951725/iusa_75x75.8951725.jpg?version=0"
                                        alt=""
                                        className={cx('review-item-account-image')}
                                    />
                                </div>
                                <div className={cx('review-item-container')}>
                                    <div className={cx('review-item-info')}>
                                        <p className={cx('review-item-info-text')}>
                                            <a href="" className={cx('review-item-info-link')}>
                                                Susan
                                            </a>
                                             on Sep 26, 2022
                                        </p>
                                    </div>
                                    <div className={cx('review-item-rate')}></div>
                                    <div className={cx('review-item-comment')}>
                                        <p className={cx('review-item-comment-text')}>
                                            I ordered 2 shirts and absolutely Love the shirts I received. I ordered a
                                            sun bleach shirt, in a size medium with paint and distressing/holes. So, so
                                            cute and soft, has that worn feel to it, cozy!! The medium fits like and
                                            oversized shirt without being too big and baggy. I also got an ombré shirt,
                                            in a size small again so soft, has that worn feel to it and cozy!! The small
                                            fits, fitted. More than met my expectations. Will be purchasing again
                                            soon!!!
                                        </p>
                                    </div>
                                    <div className={cx('review-item-product')}>
                                        <div className={cx('review-item-product-box')}>
                                            <a href="" className={cx('review-item-product-link')}>
                                                <img src="https://i.etsystatic.com/1457967763/r/il/cb1066/1457967763/il_170x135.1457967763_nl2u.jpg" alt=""className={cx('review-item-product-image')} />
                                                <div className={cx('review-item-product-name')}>
                                                    <p>Half Bleached Flannel Shirt Custom Hand Dyed Flannels</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('review-item')}>
                                <div className={cx('review-item-account')}>
                                    <img
                                        src="https://i.etsystatic.com/iusa/e6bec4/8951725/iusa_75x75.8951725.jpg?version=0"
                                        alt=""
                                        className={cx('review-item-account-image')}
                                    />
                                </div>
                                <div className={cx('review-item-container')}>
                                    <div className={cx('review-item-info')}>
                                        <p className={cx('review-item-info-text')}>
                                            <a href="" className={cx('review-item-info-link')}>
                                                Susan
                                            </a>
                                             on Sep 26, 2022
                                        </p>
                                    </div>
                                    <div className={cx('review-item-rate')}></div>
                                    <div className={cx('review-item-comment')}>
                                        <p className={cx('review-item-comment-text')}>
                                            I ordered 2 shirts and absolutely Love the shirts I received. I ordered a
                                            sun bleach shirt, in a size medium with paint and distressing/holes. So, so
                                            cute and soft, has that worn feel to it, cozy!! The medium fits like and
                                            oversized shirt without being too big and baggy. I also got an ombré shirt,
                                            in a size small again so soft, has that worn feel to it and cozy!! The small
                                            fits, fitted. More than met my expectations. Will be purchasing again
                                            soon!!!
                                        </p>
                                    </div>
                                    <div className={cx('review-item-product')}>
                                        <div className={cx('review-item-product-box')}>
                                            <a href="" className={cx('review-item-product-link')}>
                                                <img src="https://i.etsystatic.com/1457967763/r/il/cb1066/1457967763/il_170x135.1457967763_nl2u.jpg" alt=""className={cx('review-item-product-image')} />
                                                <div className={cx('review-item-product-name')}>
                                                    <p>Half Bleached Flannel Shirt Custom Hand Dyed Flannels</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
