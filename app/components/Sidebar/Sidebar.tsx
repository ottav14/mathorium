import styles from "./Sidebar.module.css";
import Link from "next/link";

function SidebarItem({ text, link }) {
	return (
		<div className={styles.sidebarItem}>
			<Link href={link}>{text}</Link>
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
			<SidebarItem text="Set Theory" link="/subjects/set-theory" />	
			<SidebarItem text="Linear Algebra" link="/subjects/linear-algebra" />	
			<SidebarItem text="Calculus" link="/subjects/calculus" />	
		</div>
	);
}
