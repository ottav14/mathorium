import styles from "./Sidebar.module.css";

function SidebarItem({ text, link }) {
	return (
		<div className={styles.sidebarItem}>
			<a href={link}>{text}</a>
		</div>
	);
}

export default function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebarLogo}>
				<a href="/">Mathorium</a>
			</div>
			<div className={styles.sidebarTitle}>
				Subjects
			</div>
			<SidebarItem text="Set Theory" link="set-theory" />	
			<SidebarItem text="Linear Algebra" />	
			<SidebarItem text="Calculus" />	
		</div>
	);
}
