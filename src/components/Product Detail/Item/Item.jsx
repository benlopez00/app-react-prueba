
import styles from './Item.module.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Item = ()=>{

    const onAdd = (count)=>{
        console.log("onAdd", count)
    }
    const [num, setNum] = useState(0)
    const sumar = () => num < meta.stock ? 
        setNum(num + 1)
        : alert("No hay mas stock disponible")
    const restar = () => num > 0 ? 
        setNum(num - 1) 
        : alert("No se aceptan valores negativos")


    const {productId} = useParams();
    const [meta, setMeta] = useState("");
    useEffect(() => {
        const getData = async() =>{
            try{
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const json = await response.json();
                console.log(json);
                setMeta(json);
            }catch (error) {
                console.log("error", error);
            }
        }
        getData();
    }, [productId])


    return(
        <div className={styles.detailContainer}>
            <p style={{width: "100%"}}>item detail</p>
            <div className={styles.imgContainer}>
                <img src={meta.image} alt={meta.title}/>
            </div>
            <div className={styles.imgContainer}>
                <h4>{meta.title}</h4>
                <h5>$ {meta.price}</h5>
            </div>
            <button className={styles.botonCount} onClick={restar}>
                    -
                </button>
                <p>{num}</p>
                <button className={styles.botonCount} onClick={sumar}>
                    +
                </button>
                <button disabled={meta.stock === 0} className='botonAgregar' onClick={()=>onAdd(num)}>Agregar al carrito</button>
        </div>
    )
}