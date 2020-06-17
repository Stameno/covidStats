import React, {useEffect, useState} from 'react';
import styles from './style.module.css';
import RowItem from '../../components/RowItem';
import InfoComponent from '../../components/InfoComponent';
import HeaderRowItem from '../../components/HeaderRowItem';
import sortFunction from '../../components/SortFunction';

const axios = require('axios').default;
const shortid = require('shortid');
/*
  Defines the header columns of the country table
  Name for display and key for sorting
*/
const columns = [
    {name: 'Country', key: 'Country'},
    {name: 'Total Confirmed', key: 'TotalConfirmed'}
];

function Home() {

    const [countries, setCountries] = useState([]);
    const [currentCountry, setCurrentCountry] = useState({});

    /*
      Gets all the countries data
      and sets all the countries array
      and the initial value for the right Info component
    */
    useEffect(() => {
        axios.get('https://api.covid19api.com/summary')
            .then((response) => {
                setCountries(response.data.Countries);
                setCurrentCountry(response.data.Countries[0])
            })
    }, []);

    const sortItems = (property) => {
        setCountries(sortFunction(property, countries))
    };

    return (
        <div className={styles.container}>
            <div className={styles.countryContainer}>
            <HeaderRowItem
                sortable={true}
                sortItems={(property) => sortItems(property)}
                columns={columns}
            />
            <div className={styles.countryScrollableContainer}>
                {countries.length > 0 ? countries.filter(country => country.NewConfirmed > 0).map(country => {
                    return <RowItem
                        key={shortid.generate()}
                        columns={[
                            {name: country.Country},
                            {name: country.TotalConfirmed},
                        ]}
                        slug={country.Slug}
                        setCurrentCountry={() => setCurrentCountry(country)}
                    />
                }) : null}
            </div>
            </div>
            <div className={styles.infoContainer}>
                <InfoComponent country={currentCountry}/>
            </div>
        </div>
    );
}

export default Home;
