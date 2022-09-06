import React from "react";
import styles from "./CartWidget.module.css";

export default function CartWidget() {
    return(
        <div>
            <button className={styles.boton}><img src={require('../../assets/carritoCompras.png')} alt="Carrito de Compras" /></button>
        </div>
    )
}
