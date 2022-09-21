import ItemCount from '../ItemCount/ItemCount'
import styles from './ItemDetail.module.css'

export const ItemDetail = ({item})=>{

    const onAdd = (count)=>{
        console.log("onAdd", count)
    }

    return(
        <div className={styles.detailContainer}>
            <p style={{width: "100%"}}>item detail</p>
            <div className={styles.imgContainer}>
                <img src={item.image} alt={item.title}/>
            </div>
            <div className={styles.imgContainer}>
                <h4>{item.title}</h4>
                <h5>$ {item.price}</h5>
            </div>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
    )
}