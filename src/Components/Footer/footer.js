import React from 'react';
import FooterLinks from './footerLinks';
import Icon from 'Components/Icons/icon';
import {footerData, iconsData} from './data.js';
import styles from './footer.module.scss';

const footerListItems = footerData.map((e, i) => {
    return (
        <FooterLinks
            heading={e.header}
            key={i}
            listItems={e.listItems}
            styles={styles}
        />
    );
});

const socialIcons = iconsData.map((e) => {
    return (
        <Icon key={e} name={e} />
    );
});

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.logo}>
                <Icon name="logo" />
            </div>
            <div className={styles.footer_listItems}>
                {footerListItems}
            </div>
            <div className={styles.socialIconsWrapper}>
                {socialIcons}
            </div>
        </div>
    );
};

export default Footer;
