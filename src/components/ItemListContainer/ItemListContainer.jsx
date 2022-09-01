import React, { Fragment } from "react";
import styles from "../ItemListContainer/ItemListContainer.module.css";

export default function ItemListContainer({greeting, solicitud}){
    return(
        <Fragment>
            <div className={styles.card}>
                <h1>{greeting}</h1>
                <p>{solicitud}</p>
            </div>
        </Fragment>
    );
}