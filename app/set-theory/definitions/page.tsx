import styles from "./page.module.css";
import Definition from "../../components/Definition/Definition.tsx";

export default function Definitions() {
	return (
		<div className={styles.notesBody}>
			<div className={styles.notesTitle}>
				Definitions
			</div>
			<div className={styles.notesContent}>
				<Definition term="Set">
					Hello this is the description for set.
				</Definition> 
			</div>
		</div>
	);
}
