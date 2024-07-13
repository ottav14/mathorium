import styles from "./page.module.css";
import Note from "../../../components/Note/Note.tsx";
import NoteItem from "../../../components/NoteItem/NoteItem.tsx";

export default function Definitions() {
	return (
		<Note title="Definitions">
			<NoteItem label="Term">
				A term of an equation or expression is any structure which is seperated by a "+" or "-" sign.
				In the expression: 3x<sup>2</sup> + 2x, both 3x<sup>2</sup> and 2x are seperate terms.
			</NoteItem> 
			<NoteItem label="Linearly dependent">
				Two terms are said to be linearly dependent if they can be combined into one term.
				The terms 5x<sup>3</sup> and 2x<sup>3</sup> are linearly dependent because they may be combined 
				into 7x<sup>3</sup>
			</NoteItem> 
			<NoteItem label="Linearly independent">
				Two terms are linearly independt if they cannot be combined. 4x and 9x<sup>5</sup> are linearly
				independent because they cannot be combined further.
			</NoteItem> 
			<NoteItem label="Linear Combination">
				A linear combination is an expression consisting of multiple linearly independent terms.
				For instance: 3x<sup>3</sup> + 4x<sup>2</sup> - 2x, is a linear combination of 3 terms.
			</NoteItem> 
		</Note>
	);
}
