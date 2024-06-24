import styles from "./page.module.css";
import Note from "../../../components/Note/Note.tsx"
import NoteItem from "../../../components/NoteItem/NoteItem.tsx"

export default function Axioms() {
	return (
		<Note title="Axioms">
			<NoteItem label="Axiom of Extensionality">
				Two sets are the same if they have the same elements.
			</NoteItem>
			<NoteItem label="Axiom of Regularity">
				Every set "A" contains at least one element which is disjoint from "A."
			</NoteItem>
			<NoteItem label="Axiom Schema of Specification">
				A subset of a given set which requires a fomula to be satified for membership may always be constructed,
				so long as the formula is well formed. (More rigor to be added when the subject of logic is covered).
			</NoteItem>
			<NoteItem label="Axiom of Union">
				For any set of sets "A" there exists a set "B" such that all elements of all sets in A are members of B.
			</NoteItem>
			<NoteItem label="Axiom Schema of Replacement">
				The image of any set under a well defined function is always another set.
			</NoteItem>
			<NoteItem label="Axiom of Infinity">
				There exists at least one set of infinite size.
			</NoteItem>
			<NoteItem label="Axiom of Power Set">
				For every set "A" a power set of A may be constructed, containing all subsets of A.
			</NoteItem>
			<NoteItem label="Axiom of Choice (Controverisal)">
				For any collection, infinite or otherwise, of non-empty sets, a new set may be constructed by choosing
				one element from each set.
			</NoteItem>
		</Note>
	);
}
