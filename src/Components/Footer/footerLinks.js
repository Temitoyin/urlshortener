import React from 'react';
import {isNotEmptyArray} from '../../utils.js';
const FooterLinks = ({heading, listItems, styles}) => {
    return (
        <div className={styles.footerLinks}>
            <h2 className={styles.heading}>{heading}</h2>
            <ul>
                {listItems &&
            isNotEmptyArray(listItems) &&
            listItems.map((e) => {
                return (
                    <li
                        className={styles.listItems}
                        key={e}
                    >
                        {e}
                    </li>
                );
            })}
            </ul>
        </div>
    );
};

export default FooterLinks;