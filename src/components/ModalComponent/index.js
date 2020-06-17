import React, {useEffect, useState} from 'react';
import styles from './style.module.css'
import HeaderRowItem from '../HeaderRowItem';
import RowItem from '../RowItem';
import {useParams, useHistory} from "react-router-dom";
import sortFunction from '../SortFunction';

const shortid = require('shortid');
const axios = require('axios').default;

const headerColumns = [
    {name: 'Date', key: 'Date'},
    {name: 'Deaths', key: 'Deaths'},
    {name: 'Active', key: 'Active'},
    {name: 'Recovered', key: 'Recovered'}
];

export default function ModalComponent(){

    let history = useHistory();
    let { Slug } = useParams();

    const [currentCountryHistory, setCurrentCountryHistory] = useState([]);

    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    useEffect(() => {
        axios.get(`https://api.covid19api.com/country/${Slug}`)
            .then( (response) => {
                setCurrentCountryHistory(response.data);
            })
    }, [Slug]);

    const sortItems = (property) => {
        setCurrentCountryHistory(sortFunction(property, currentCountryHistory))
    };

        return (
            <div className={styles.container}>
                <div className={styles.contentContainer}>
                    <div className={styles.close} onClick={back}>Close</div>
                    <div className={styles.title}>{currentCountryHistory[0]?.Country}</div>
                    <HeaderRowItem
                        sortItems={(property) => sortItems(property)}
                        columns={headerColumns}
                        sortable
                    />
                    <div className={styles.tableContainer}>
                    {currentCountryHistory.map(country => {
                        return <RowItem
                            key={shortid.generate()}
                            columns={[
                                {name: country.Date},
                                {name: country.Deaths},
                                {name: country.Active},
                                {name: country.Recovered}
                                ]}
                            actions={false}
                        />
                    })}
                    </div>
                </div>
            </div>
        )
}
