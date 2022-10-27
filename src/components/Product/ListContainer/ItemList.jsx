import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Card/Card'
import ItemCount from '../Count/Count'
import styles from './ItemList.module.css'

const ItemList = () => {
    const [meta, setMeta] = useState([])
    const {tipoProducto} = useParams();


    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=20')
            .then(res=>res.json())
            .catch((error)=>console.log(error))
            .then(json =>{
                if (!tipoProducto){
                    setMeta(json)
                }else{
                    const filtrado = json.filter(item => item.category === tipoProducto);
                    setMeta(filtrado)
                }
            });
    }, [tipoProducto])
    
    

    
    return (
        <div className={styles.lista}>
            {meta.map(x => 
                <Card key={x.id}>
                    <ItemCount  stock={x.rating.count} imgx={x.image} precio={x.price} ratio={x.rating.rate} id={x.id}/>
                </Card>
            )}
        </div>
    )
}

export default ItemList