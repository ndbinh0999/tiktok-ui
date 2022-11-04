import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div>
            <div className={cx('wrapper')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/5a671c4c3a5cced2e0a5109bd9818b60~c5_300x300.webp?x-expires=1667718000&x-signature=pT%2FkK9txpp30rZogyk2rirZjhiA%3D"
                    alt=""
                />
                <div className={cx('info')}>
                    <p className={cx('name')}>
                        <h4>Nguyễn Bình</h4>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <span className={cx('username')}>nguyenbinh99</span>
                </div>
            </div>
            <div className={cx('wrapper')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fe98319cc3817a148c440beb9bdf39e4~c5_300x300.webp?x-expires=1667721600&x-signature=H7p9T%2BYaR9Opt1qHg%2BfatyJR7UU%3D"
                    alt=""
                />
                <div className={cx('info')}>
                    <p className={cx('name')}>
                        <h4>Cao Hương</h4>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <span className={cx('username')}>cthuongK9</span>
                </div>
            </div>
        </div>
    );
}

export default AccountItem;
