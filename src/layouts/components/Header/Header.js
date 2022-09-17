import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { CartIcon, FavoritesIcon, InboxIcon, MessageIcon, ShopManagerIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import Category from '../Category';
import { useState } from 'react';
import PopupForm from '../PopupForm';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;
    // Login logic
    const [isLogin, setIsLogin] = useState(false);
    const togglePopup = () => {
        setIsLogin(!isLogin);
    };

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner_header')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Etsy" className={cx('logo')} />
                    </Link>

                    <Search />

                    <div className={cx('actions')}>
                        {currentUser ? (
                            <>
                                <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <FavoritesIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <ShopManagerIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <CartIcon />
                                        <span className={cx('badge')}>12</span>
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button text>Register</Button>
                                <Button primary onClick={togglePopup}>
                                    Sign In
                                </Button>

                                {isLogin && (
                                    <PopupForm
                                        content={
                                            <>
                                                <b>Design your Popup</b>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                                <button>Test button</button>
                                            </>
                                        }
                                        handleClose={togglePopup}
                                    />
                                )}
                            </>
                        )}

                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                            {currentUser ? (
                                <Image
                                    className={cx('user-avatar')}
                                    // src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                                    alt="Nguyen Van A"
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
                <div className={cx('inner_category')}>
                    <Category />
                </div>
            </div>
        </header>
    );
}

export default Header;
