import React from 'react';
import Icon from 'Components/Icons/icon';
import Logo from 'images/logo.svg';
import styles from './navigation.module.scss';
const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.mobileNav}>
                <img src={Logo}  alt="logo"/>
                <Icon name="menu" />
            </div>
            <div className={styles.desktopNavigation}>
                <div className={styles.left}>
                    <img
                        alt="logo"
                        className={styles.logo}
                        src={Logo}
                    />
                    <ul>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.loginButton}>Login</button>
                    <button className={styles.signUpButton}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
