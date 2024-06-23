import styles from "./NoteItem.module.css";

export default function NoteItem({ label, children }) {
	return (
		<div className={styles.noteItem}>
			<div className={styles.label}>
				{label}
			</div >
			<div className={styles.description}>
				{children}
			</div >
		</div>
	);
}
