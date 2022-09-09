import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import ItemCount from '../ItemCount/ItemCount'
import styles from './ItemList.module.css'
import data from '../data'

const ItemList = () => {
    const [meta, setMeta] = useState([])

    useEffect(() => {
        const recibirData = new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                resolve(data);
            }, 5000)
        })
        recibirData
            .then((response)=>{
                setMeta(response);
            })
            .catch((error)=>console.log(error))
    }, [])
    

    
    return (
        <div className={styles.lista}>
            {meta.map(x => 
                <Card>
                    <ItemCount key={x.id} stock={x.stock}/>
                </Card>
            )}
        </div>
    )
}

export default ItemList