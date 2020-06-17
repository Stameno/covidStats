import React from 'react';
import {Link} from 'react-router-dom';
import styles from './style.module.css';

export default function Splash() {
    return (
        <div className={styles.container}>
            <Link
                to="/home"
                className={styles.link}
            >
                Go to Home
            </Link>
        </div>
    )
}
