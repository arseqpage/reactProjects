import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'classnames';

import loaderPurple from './img/loader-purple.svg';
import loaderWhite from './img/loader-white.svg';
import loaderBlack from './img/loader-black.svg';

import styles from './UiLoading.module.css';

const UiLoading = ({ theme = 'white', isShadow = true, classes }) => {
    const [loader, setLoaded] = useState();

    useEffect(() => {
        switch (theme) {
            case 'black':
                setLoaded(loaderBlack);
                break;

            case 'blue':
                setLoaded(loaderPurple);
                break;

            case 'white':
                setLoaded(loaderPurple);
                break;

            default:
                setLoaded(loaderWhite);
        }
    }, []);

    return (
        <img
            className={clsx(styles.loader, isShadow && styles.shadow, classes)}
            src={loader}
            alt="Loading..."
        />
    );
};

UiLoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string,
};

export default UiLoading;
