/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

import styles from './shortLinkCard.module.scss';

const LinkInput = ({index, originalUrl, shortUrl}) => {
    const [style, setStyle] = useState({ style: false});
    const handleSubmit = (e) => {
        e.preventDefault();
        const Btn = document.getElementById(`${index}Copied`);
        const shortLink = document.getElementById('shortLink');
        setStyle({ style: true });
        // copy shortened link
        navigator.clipboard.writeText(
            shortLink.innerText
        );
        // change button style to "copied!"
        Btn.innerText = 'Copied';
        Btn.classList.add(styles.copied);
    };
    return (
        <div className={styles.shortLinkCard}>
            <div className={styles.topLink}>
                <p className={styles.link}>{originalUrl}</p>
            </div>
            <div className={styles.right}>
                {/* <div className={styles.shortLink}> */}
                <p id='shortLink'>{shortUrl}</p>
                
                <button
                    id={`${index}Copied`}
                    onClick={(e) => handleSubmit(e)}
                >copy</button>
            </div>
        </div>
    );
};

export default LinkInput;
