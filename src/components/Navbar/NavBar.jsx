import React, { Fragment } from "react";
import styles from "../Navbar/NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<Fragment>
			<div className={styles.nav}>
					<Link to={'/'} style={{ textDecoration: 'none' }}>
						<div className={styles.logoAndTitle}>
							<img src={require ("../../assets/logoCommerce.jpg")} alt="a supermarket cart" className={styles.logo}/>
							<div>
								<h1>SIBERIA</h1>
							</div>
						</div>
					</Link>
					<div className={styles.list}>
						
						<Link to={'/'} style={{ textDecoration: 'none' }}><h2>Home</h2></Link>
						<Link to={'/productos/electronics'} style={{ textDecoration: 'none' }}><h2>Electronicos</h2></Link>
						<Link to={'/productos/jewelery'} style={{ textDecoration: 'none' }}><h2>Joyeria</h2></Link>
						<Link to={'/productos/men\'s clothing'} style={{ textDecoration: 'none' }}><h2>Hombre</h2></Link>
						<Link to={'/productos/women\'s clothing'} style={{ textDecoration: 'none' }}><h2>Mujer</h2></Link>
					</div>
					<div className={styles.cartYBusc}>
						<CartWidget/>
                        <input type="text" name="text" placeholder="Type here..." className={styles.input}/>
					</div>
			</div>
		</Fragment>
	);
}