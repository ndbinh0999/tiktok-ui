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
                    src="https://upanh123.com/wp-content/uploads/2020/10/4529dd12ae7811705351b516039135d7.jpg"
                    alt=""
                />
                <div className={cx('info')}>
                    <span className={cx('name')}>
                        <h4>Nguyễn Bình</h4>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </span>
                    <span className={cx('username')}>nguyenbinh99</span>
                </div>
            </div>
            <div className={cx('wrapper')}>
                <img className={cx('avatar')} src="https://hoc24.vn/images/avt/avt2814693_256by256.jpg" alt="" />
                <div className={cx('info')}>
                    <span className={cx('name')}>
                        <h4>Cao Mai</h4>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </span>
                    <span className={cx('username')}>maimoonK5</span>
                </div>
            </div>
            <div className={cx('wrapper')}>
                <img
                    className={cx('avatar')}
                    src="https://vcdn1-ngoisao.vnecdn.net/2022/02/16/truong-tu-phong-3-5820-1645003544.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=zd75ycN6shrnp8adcewYoA"
                    alt=""
                />
                <div className={cx('info')}>
                    <span className={cx('name')}>
                        <h4>Cao Hương</h4>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </span>
                    <span className={cx('username')}>cthuongK9</span>
                </div>
            </div>
        </div>
    );
}

export default AccountItem;
