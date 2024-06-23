import styles from "./Note.module.css";

export default function Note({ children, title }) {
	return (
		<div className={styles.note}>
			<div className={styles.noteTitle}>
				{title}
			</div>
			<div className={styles.noteContent}>
				{children}
			</div>
		</div>
	);
}
