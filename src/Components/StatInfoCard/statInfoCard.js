import React from 'react';
import Icon from 'Components/Icons/icon';
import styles from './statInfoCard.module.scss';

const InfoCard = ({ header, text, icon }) => {
    return (
        <div className={styles.infoCard}>
            <div className={styles.iconContainer}>
                <div className={styles.iconWrapper}>
                    <Icon name={icon} />
                </div>
            </div>
            <h1>{header}</h1>
            <p>{text}</p>
        </div>
    );
};

export default InfoCard;
