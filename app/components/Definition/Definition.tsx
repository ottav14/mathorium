import styles from "./Definition.module.css";

export default function Definition({ term, children}) {
	return (
		<div className={styles.definition}>
			<div className={styles.term}>
				{term}
			</div >
			<div className={styles.description}>
				{children}
			</div >
		</div>
	);
}
