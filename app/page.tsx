import styles from "./page.module.css";
import Navbar from "./Navbar.tsx";

function HeaderItem({ text, link }) {
	return (
		<div className={styles.headerItem}>
			<a href={link}>{text}</a>
		</div>
	);
}

function SubjectItem({ text, link }) {
	return (
		<div className={styles.subjectItem}>
			<a href={link}>{text}</a>
		</div>
	);
}

export default function Home() {
  return (
	<div className={styles.main}>
		<div className={styles.bodyContent}>
			<div className={styles.subjectContainer}>
				<div className={styles.subjectTitle}>
					Subjects
				</div>
				<div className={styles.subjectItemsContainer}>
					<SubjectItem text="Set Theory" />
					<SubjectItem text="Linear Algebra" />
					<SubjectItem text="Calculus" />
				</div>
			</div>
		</div>
	</div>
  );
}
