import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    disabled = false,
    small = false,
    larger = false,
    text = false,
    rounded = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    //các prop cơ chế, tình huống tương tác với button
    let Comp = 'button'; //thay thẻ button => thẻ loại khác
    const props = {
        onClick,
        ...passProps, // tình huống muốn sử dụng mở trang blank
    };

    //Remove event listener when btn is disable
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        disabled,
        small,
        larger,
        text,
        rounded,
        [className]: className,
        leftIcon,
        rightIcon,
    }); // các class của comp

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
