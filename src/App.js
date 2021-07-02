/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Navigation from 'Components/Navigation/navigation';
import ShortLinkCard from 'Components/ShortLinkCard/shortLinkCard';
import Footer from 'Components/Footer/footer';
import LinkInput from 'Components/LinkInput/linkInput';
import {isNotEmptyArray} from 'utils';
import Button from 'Components/Button/button';
import InfoCard from 'Components/StatInfoCard/statInfoCard';
import HeaderImg from './images/headerImg.svg';
import { statisticsInfo } from 'Components/StatInfoCard/data';
import styles from 'App.module.scss';

const infoList = statisticsInfo.map((e, i) => {
    return (
        <>
            <InfoCard
                header={e.header}
                icon={e.icon}
                key={i}
                text={e.text}
            />
            <div className={styles.rule} />
        </>
    );
});

function App() {
    const [urlData, setUrlData] = useState([]);
    const handleUrlChange = (originalUrl, shortUrl) => {
        setUrlData((oldArray) => [
            ...oldArray,
            { originalUrl: originalUrl, shortUrl: shortUrl },
        ]);
    };
    return (
        <div className={styles.app}>
            <Navigation />
            <section className={styles.app_header}>
                <div className={styles.img}>
                    <img src={HeaderImg} />
                </div>
                <div className={styles.headerBottom}>
                    <h1>More than just shorter links</h1>
                    <p>
                        Build your brand’s recognition and get detailed insights on how
                        your links are performing.
                    </p>
                    <div>
                        <Button />
                    </div>
                </div>
            </section>
            <section className={styles.app_advanced}>
                <div className={styles.app_linkInput}>
                    <LinkInput handleUrlChange={handleUrlChange} />
                </div>
                <div className={styles.shortLinksWrapper}>
                    {urlData && isNotEmptyArray(urlData) && urlData.map((e, i) => {
                        return (
                            <ShortLinkCard
                                index={i}
                                key={i}
                                originalUrl={e.originalUrl}
                                shortUrl={e.shortUrl}
                            />
                        );
                    })
                    }
                </div>
                <div className={styles.headingText}>
                    <h2> Advanced Statistics</h2>
                    <p>
                        Track how your links are performing across the web with our
                        advanced statistics dashboard.
                    </p>
                </div>

                <div className={styles.infoList}>{infoList}</div>
            </section>
            <section className={styles.app_boostLink}>
                <h3>Boost your links today</h3>
                <Button />
            </section>
            <section className={styles.app_footer}>
                <Footer />
            </section>
        </div>
    );
}

export default App;
