import styles from "./page.module.css";

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
		<div className={styles.header}>
			<HeaderItem text="Home" link="/" />
			<HeaderItem text="About" link="about" />
			<div className={styles.headerTitle}>
				<a href="/">Mathorium</a>
			</div>
			<HeaderItem text="Hire Me" link="hire" />
			<HeaderItem text="More Projects" link="projects" />
		</div>
		<hr />
		
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
