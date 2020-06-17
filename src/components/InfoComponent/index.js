import React from 'react';
import styles from './style.module.css'
import {Link, useLocation} from 'react-router-dom';


export default function InfoComponent({country, getCountryHistory}){
        let location = useLocation();
        return (
            <div className={styles.container}>
                <div className={styles.columnContainer}>
                    <div className={styles.textContainer}>
                        <div className={styles.label}>Country:</div>
                        <div className={styles.text}>
                            {country.Country}
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.label}>Total confirmed:</div>
                        <div className={styles.text}>
                            {country.TotalConfirmed}
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.label}>New deaths:</div>
                        <div className={styles.text}>
                            {country.NewDeaths}
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.label}>New confirmed:</div>
                        <div className={styles.text}>
                            {country.NewConfirmed}
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.label}>New recovered:</div>
                        <div className={styles.text}>
                            {country.NewRecovered}
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.label}>Total deaths:</div>
                        <div className={styles.text}>
                            {country.TotalDeaths}
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.label}>Total recovered:</div>
                        <div className={styles.text}>
                            {country.TotalRecovered}
                        </div>
                    </div>
                    <Link
                        to={{
                            pathname: `/country/${country.Slug}`,
                            // This is the trick! This link sets
                            // the `background` in location state.
                            state: { background: location }
                        }}
                        className={styles.link}
                    >
                        <div className={styles.textContainer}>
                            <div className={styles.historyButton}>
                                Get Historical Data
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        )
}
