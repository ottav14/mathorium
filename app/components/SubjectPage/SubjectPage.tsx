'use client'

import styles from "./SubjectPage.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Note from "../Note/Note.tsx";

export default function SubjectPage({ children, title }) {
	const currentPath = usePathname();
	const definitionsPath = currentPath + "/definitions";
	const axiomsPath = currentPath + "/axioms";
	const theoremsPath = currentPath + "/theorems";
	return (
		<>
			<Note title={title}>
				{children}
			</Note>
			<Note title="Sections">
				<div className={styles.sections}>
					<Link href={definitionsPath}>Definitions</Link>
					<Link href={axiomsPath}>Axioms</Link>
					<Link href={theoremsPath}>Theorems</Link>
				</div>
			</Note>
		</>
	);
}
