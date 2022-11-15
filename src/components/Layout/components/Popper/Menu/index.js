import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { wrapper as PopperWrapper } from '..';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {}

function Menu({ children, items = [], onChange = defaultFn }) {

    const [history, setHistory] = useState([{data: items}])
    const current = history[history.length -1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !! item.children
            return <MenuItem key={index} data={item} onClick={() => {
                if(isParent) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }}></MenuItem>;
        });
    };

    return (
        <Tippy
            delay={[0, 700]}
            interactive={true}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                    {history.length >1 &&<Header title={'Ngôn Ngữ'} onBack={() => {
                        setHistory(prev => prev.slice(0, prev.length - 1))
                    }}/>}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
