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
					A collection of objects. An object is either contained in a given set, or it is not.
				</Definition> 
				<Definition term="Element">
					An object contained in a set is considered an element of said set.
				</Definition> 
				<Definition term="Subset">
					A subset of a given set is a set which only contains objects that are also contained
					within the given set. 
				</Definition> 
				<Definition term="Union">
					The union of two sets, A and B, is the set comprised of all elements contained in either A or B.
				</Definition> 
				<Definition term="Intersection">
					The intersection of two sets, A and B, is the set which contains only the elements which are
					contained in both A and B. 
				</Definition> 
				<Definition term="Superset">
					The superset of a given set is the set comprised of all possible subsets of the given set.
				</Definition> 
				<Definition term="Cartesian Product">
					The cartesian product of two sets, A and B, is the set of all possible ordered paris (a, b),
					where "a" is an element of A, and "b" is an element of B.
				</Definition> 
			</div>
		</div>
	);
}
