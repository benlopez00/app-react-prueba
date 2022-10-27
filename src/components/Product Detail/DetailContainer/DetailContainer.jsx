
import styles from './ItemDetailContainer.module.css'
import { Item } from "../Item/Item";

export const ItemDetailContainer = ()=>{
    return(
        <div className={styles.itemDetailContainer}>
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            <Item/>
        </div>
    )
}