import styles from "./ItemCount.module.css"
import { useState } from "react"

const ItemCount = ({stock}) => {
    const [num, setNum] = useState(0)

    const sumar = () => num < stock ? 
        setNum(num + 1)
        : alert("No hay mas stock disponible")
    const restar = () => num > 0 ? 
        setNum(num - 1) 
        : alert("No se aceptan valores negativos")

    return (
        <>
            <img className={styles.bolsa} src={require("../../assets/bolsaComida.png")} alt="Bolsa de Comida para perro marca Pedigree" />
            <h3 className={styles.infoStock}>Stock disponible: {stock}</h3>
            <div className={styles.botonera}>
                <button className={styles.botonCount} onClick={restar}>
                    -
                </button>
                <p>{num}</p>
                <button className={styles.botonCount} onClick={sumar}>
                    +
                </button>
            </div>
        </>
    )
}

export default ItemCount