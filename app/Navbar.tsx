import styles from "./page.module.css";

function HeaderItem({ text, link }) {
	return (
		<div className={styles.headerItem}>
			<a href={link}>{text}</a>
		</div>
	);
}

export default function Navbar() {
	return (
		<>
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
		</>
	);
}
