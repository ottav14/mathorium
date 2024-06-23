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
				hell yea!
			</NoteItem>
			<NoteItem label="Axiom of Pairing">
				hell yea!
			</NoteItem>
			<NoteItem label="Axiom of Union">
				hell yea!
			</NoteItem>
			<NoteItem label="Axiom Schema of Replacement">
				hell yea!
			</NoteItem>
			<NoteItem label="Axiom of Infinity">
				hell yea!
			</NoteItem>
			<NoteItem label="Axiom of Power Set">
				hell yea!
			</NoteItem>
			<NoteItem label="Axiom of Choice (Controverisal)">
				hell yea!
			</NoteItem>
		</Note>
	);
}
