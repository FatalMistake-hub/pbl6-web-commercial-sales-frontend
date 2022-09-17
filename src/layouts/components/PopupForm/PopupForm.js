import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './PopupForm.module.scss';

const cx = classNames.bind(styles);
function PopupForm({ children }) {
    return (
        <div className={cx('popup-box')}>
            <div className={cx('box')}>
                <span className={cx('close-icon')}>x</span>
                <div className={cx('header')}>
                    <h1>Sign in</h1>
                    <Button text rounded outline>
                        Register
                    </Button>
                </div>
                <div className={cx('email')}>
                    <span className={cx('content')}>Email address</span>
                    <input className={cx('input_login')} type="email" />
                </div>
                <div className={cx('password')}>
                    <span className={cx('content')}>Password</span>
                    <input className={cx('input_login')} type="text" />
                </div>
                <div className={cx('forgotorsave')}>
                    <div className={cx('check')}>
                        <input type="checkbox" />
                        <span className={cx('content')}> Stay signed in</span>
                    </div>
                    <a href="">Forgot your password?</a>
                </div>
                <div className={cx('sign_in')}>
                    <Button login rounded primary >
                        Sign in
                    </Button>
                </div>
                <div className={cx('or')}>
                    <span>OR</span>
                </div>
                <div className={cx('sign_in')}>
                    <Button login rounded  >
                        Continue with Google
                    </Button>
                </div><div className={cx('sign_in')}>
                    <Button login rounded  >
                        Continue with Facebook
                    </Button>
                </div><div className={cx('sign_in')}>
                    <Button login rounded  >
                        Continue with Apple
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PopupForm;
