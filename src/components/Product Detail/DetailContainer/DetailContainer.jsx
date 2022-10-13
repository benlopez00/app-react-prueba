import { useState, useEffect } from "react";
import styles from './ItemDetailContainer.module.css'
import { ItemDetail } from "../../Product/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = ()=>{
    const [meta, setMeta] = useState({})
    const {productId} = useParams();

// eslint-disable-next-line
    const getItem = () =>{
        console.log(productId)
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .catch((error)=>console.log(error))
    }
    useEffect(() => {
        const getProd = async ()=>{
            const prod = await getItem();
            setMeta(prod)
            console.log(prod)
        }
        getProd();
    }, [getItem])

    console.log('item:', meta)
    return(
        <div className={styles.itemDetailContainer}>
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            <ItemDetail item={meta}/>
        </div>
    )
}