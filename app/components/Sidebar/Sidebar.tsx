import styles from "./Sidebar.module.css";
import Link from "next/link";
import Image from "next/image";
import githubIcon from "../../../public/images/github-icon.svg";
import linkedInIcon from "../../../public/images/linkedin-icon.png";

function SidebarItem({ text, link }) {
	return (
		<div className={styles.sidebarItem}>
			<Link href={link}>{text}</Link>
		</div>
	);
}

export default function Sidebar() {
	return (
		<div className={styles.sidebarContainer}>
			<div className={styles.sidebar}>
				<div className={styles.sidebarLogo}>
					<a href="/">Mathorium</a>
				</div>
				<div className={styles.sidebarTitle}>
					Subjects
				</div>
				<div className={styles.itemContainer}>
					<SidebarItem text="Set Theory" link="/subjects/set-theory" />	
					<SidebarItem text="Linear Algebra" link="/subjects/linear-algebra" />	
					<SidebarItem text="Calculus" link="/subjects/calculus" />	
				</div>
				<div className={styles.iconContainer}>
					<a href="https://github.com/ottav14">
						<Image className={styles.githubIcon} src={githubIcon} width={40} height={40} />
					</a>
					<a href="https://www.linkedin.com/in/dom-ottaviano-7a5990250">
						<Image className={styles.linkedInIcon} src={linkedInIcon} width={32} height={32} />
					</a>
				</div>
			</div>
		</div>
	);
}
