import styles from "./page.module.css";
import Note from "../../../components/Note/Note.tsx";
import NoteItem from "../../../components/NoteItem/NoteItem.tsx";

export default function Definitions() {
	return (
		<Note title="Definitions">
			<NoteItem label="Set">
				A collection of objects. An object is either contained in a given set, or it is not.
			</NoteItem> 
			<NoteItem label="Element">
				An object contained in a set is considered an element of said set.
			</NoteItem> 
			<NoteItem label="Subset">
				A subset of a given set is a set which only contains objects that are also contained
				within the given set. 
			</NoteItem> 
			<NoteItem label="Union">
				The union of two sets, A and B, is the set comprised of all elements contained in either A or B.
			</NoteItem> 
			<NoteItem label="Intersection">
				The intersection of two sets, A and B, is the set which contains only the elements which are
				contained in both A and B. 
			</NoteItem> 
			<NoteItem label="Superset">
				The superset of a given set is the set comprised of all possible subsets of the given set.
			</NoteItem> 
			<NoteItem label="Cartesian Product">
				The cartesian product of two sets, A and B, is the set of all possible ordered paris (a, b),
				where "a" is an element of A, and "b" is an element of B.
			</NoteItem> 
			<NoteItem label="Empty Set">
				The set which contains no elements.
			</NoteItem> 
			<NoteItem label="Disjoint">
				If two sets, A and B, are disjoint then their intersection is the empty set.
			</NoteItem> 
		</Note>
	);
}
