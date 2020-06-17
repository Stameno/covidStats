import React from 'react';
import styles from './style.module.css'

const shortid = require('shortid');

export default function RowItem({columns, setCurrentCountry, actions = true}){

        return (
            <div className={styles.container}>
                <div className={styles.columnContainer}>
                    {columns.map(column =>
                    <div
                        key={shortid.generate()}
                        className={styles.text}>
                        {column.name}
                    </div>
                    )}
                    {actions ?
                    <div className={styles.actionsContainer}>
                        <div onClick={() => setCurrentCountry()} className={styles.infoButton}>Get Info</div>
                    </div> : null }
                </div>
            </div>
        )
}
