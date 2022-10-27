import styles from "./ItemCount.module.css"
import { useState } from "react"
import { Link } from "react-router-dom";
const ItemCount = ({stock, imgx, precio, ratio, onAdd, id}) => {
    const [num, setNum] = useState(0)

    const sumar = () => num < stock ? 
        setNum(num + 1)
        : alert("No hay mas stock disponible")
    const restar = () => num > 0 ? 
        setNum(num - 1) 
        : alert("No se aceptan valores negativos")

    return (
        <>
            <Link to={`/item/${id}`}>
                <img className={styles.bolsa} src={imgx} alt="Bolsa de Comida para perro marca Pedigree" />
                <h3 className={styles.infoStock}>Stock: {stock}  |  ${precio}  |  {ratio}</h3>
            </Link>
                <div className={styles.botonera}>
                    <button className={styles.botonCount} onClick={restar}>
                        -
                    </button>
                    <p>{num}</p>
                    <button className={styles.botonCount} onClick={sumar}>
                        +
                    </button>
                    <button disabled={stock === 0} className='botonAgregar' onClick={()=>onAdd(num)}>Agregar al carrito</button>
                </div>
        </>
    )
}

export default ItemCount