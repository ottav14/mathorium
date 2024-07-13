import styles from "./page.module.css"; 
import SubjectPage from "../../components/SubjectPage/SubjectPage.tsx";

export default function LinearAlgebra() {
	return (
		<SubjectPage title="Linear Algebra">
			Linear Algebra has emerged as one of the most foundational and far reaching fields of mathematics within
			the last century. It has a history reaching as far back as ancient china. It can be described as the study
			of many things: matrices, systems of equations, linear transformations, vector systems. But I think it's
			most accurately described as the study of linearity, an entirely abstract quality that's present in a
			baffling number of systems.
		</SubjectPage>
	);
}
