import React,{useState} from 'react';
import axios from 'axios';

import styles from './linkInput.module.scss';

const LinkInput = ({ handleUrlChange }) => {
    const [url, setUrl] = useState({ url: '' });
    const handleChange = () => (e) => {
        setUrl({ url: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .get('https://api.shrtco.de/v2/shorten?url=' + url.url)
            .then(
                (response) =>
                    response &&
          response.data &&
          response.data.result &&
          handleUrlChange(
              response.data.result.original_link,
              response.data.result.full_short_link
          )
            );
    };
    // console.log(typeof (url), 'the logg');

    return (
        <div className={styles.linkInputWrapper}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputWrapper}>
                    <input
                        onChange={handleChange()}
                        placeholder="Shorten a link here..."
                        type="text"
                    />
                </div>
                <div>
                    <button onClick={(e) => handleSubmit(e)}>Shorten It !</button>
                </div>
            </form>
        </div>
    );
};

export default LinkInput;
