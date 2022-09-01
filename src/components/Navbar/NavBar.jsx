import React, { Fragment } from "react";
import styles from "../Navbar/NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
	return (
		<Fragment>
			<div className={styles.nav}>
					<div className={styles.logoAndTitle}>
                        <img src={require ("../../assets/logoDoggo.jpg")} alt="a happy dog icon" className={styles.logo}/>
						<div>
							<h1>Doggopedia</h1>
							<p>the most woofing page!</p>
						</div>
					</div>
					<div className={styles.list}>
						<a href="https://www.coderhouse.com/" rel="noreferrer" target="_blank">Home</a>
						<a href="https://www.coderhouse.com/" rel="noreferrer" target="_blank">All Dogs</a>
						<a href="https://www.coderhouse.com/" rel="noreferrer" target="_blank">Create Dog</a>
						<a href="https://www.coderhouse.com/" rel="noreferrer" target="_blank">About</a>
					</div>
					<div className={styles.cartYBusc}>
						<CartWidget/>
                        <input type="text" name="text" class="input" placeholder="Type here..." className={styles.input}/>
					</div>
			</div>
		</Fragment>
	);
}