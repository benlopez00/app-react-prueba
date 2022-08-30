import React, { Fragment } from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
	return (
		<Fragment>
			<div className={styles.nav}>
					<div className={styles.logoAndTitle}>
                        <img src={require ("../assets/logoDoggo.png")} alt="a happy dog icon" className={styles.logo}/>
						<div>
							<h1>Doggopedia</h1>
							<p>the most woofing page!</p>
						</div>
					</div>
					<div>
                        <input type="text" name="text" class="input" placeholder="Type here..." className={styles.input}/>
					</div>
			</div>
		</Fragment>
	);
}