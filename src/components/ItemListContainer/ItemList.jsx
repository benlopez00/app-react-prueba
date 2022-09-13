import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import ItemCount from '../ItemCount/ItemCount'
import styles from './ItemList.module.css'
import data from '../data'

const ItemList = () => {
    const [meta, setMeta] = useState([])

    useEffect(() => {
        //Eslint no me permite poner la promesa por afuera del useEffect
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
                <Card key={x.id}>
                    <ItemCount  stock={x.stock} imgx={x.path} peso={x.peso} para={x.para}/>
                </Card>
            )}
        </div>
    )
}

export default ItemList