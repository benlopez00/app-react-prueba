import React, { Fragment } from "react";
import styles from "../Card/Card.module.css";

export default function Card (props){
    return(
        <Fragment>
            <div className={styles.card}>
                {props.children}
            </div>
        </Fragment>
    );
}