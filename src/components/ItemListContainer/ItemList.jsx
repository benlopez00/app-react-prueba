import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import ItemCount from '../ItemCount/ItemCount'
import styles from './ItemList.module.css'

const ItemList = () => {
    const [meta, setMeta] = useState([])

    useEffect(() => {
        getApi();
    }, [])
    
    const getApi= async () => {
        fetch('https://fakestoreapi.com/products?limit=15')
            .then(res=>res.json())
            .then(json=>{setMeta(json)})
            .catch((error)=>console.log(error))
    }

    
    return (
        <div className={styles.lista}>
            {meta.map(x => 
                <Card key={x.id}>
                    <ItemCount  stock={x.rating.count} imgx={x.image} precio={x.price} ratio={x.rating.rate}/>
                </Card>
            )}
        </div>
    )
}

export default ItemList