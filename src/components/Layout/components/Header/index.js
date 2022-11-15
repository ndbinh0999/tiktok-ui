import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { wrapper as PopperWrapper } from '../Popper';
import AccountItem from '../AccountItem';
import Button from '../Button';
import Menu from '../Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'vi',
                    title: 'Việt Nam',
                    children: {
                        title: 'Ngôn ngữ',
                        data: [
                            {
                                code: 'vi',
                                title: 'Việt Nam'
                            },{
                                code: 'en',
                                title: 'English'
                            },
                        ]
                    }
                },{
                    code: 'en',
                    title: 'English'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const [keySearch, setKeySearch] = useState('');

    const searchSubmit = () => {
        setSearchResult([1]);
    };
    const clearSubmit = () => {
        setSearchResult([]);
        setKeySearch('');
    };
    const handleMenuOnChange = (menuItem) => {
        console.log(menuItem);
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo.default} alt="Tiktok" />
                </div>

                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Tìm kiếm tài khoản và video"
                            spellCheck={false}
                            value={keySearch}
                            onChange={(e) => {
                                setKeySearch(e.target.value);
                            }}
                        />
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                        <button className={cx('clear')} onClick={clearSubmit}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={cx('search-btn')} onClick={searchSubmit}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Register</Button>
                    <Button
                        primary
                        // leftIcon={<FontAwesomeIcon icon={faSignIn} />}
                        onClick={() => {
                            alert();
                        }}
                    >
                        Log in
                    </Button>
                    <Menu items={MENU_ITEMS} onChange={handleMenuOnChange}>
                        <button className={cx('more-btn')} >
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
