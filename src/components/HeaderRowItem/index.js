import React from 'react';
import styles from './style.module.css'

const shortid = require('shortid');

export default function HeaderRowItem({columns, sortItems, sortable = false}){

        return (
            <div className={styles.container}>
                <div className={styles.columnContainer}>
                    {columns.map(column => (
                        <div
                            key={shortid.generate()}
                            className={styles.text}
                            onClick={() => sortable ? sortItems(column.key) : null}
                        >
                            {column.name} {sortable ? <i className={styles.arrow}/> : null}
                        </div>
                    ))}
                </div>
            </div>
        )
}
