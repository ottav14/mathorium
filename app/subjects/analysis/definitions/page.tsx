import styles from "./page.module.css";
import Note from "../../../components/Note/Note.tsx";
import NoteItem from "../../../components/NoteItem/NoteItem.tsx";

export default function Definitions() {
	return (
		<Note title="Definitions">
			<NoteItem label="Derivative">
				A function F(x) for which each value is equal to the slope of the tangent line on the curve of
				a given function f(x) at the point (x, f(x))
			</NoteItem> 
			<NoteItem label="Limiting sequence">
			</NoteItem> 
			<NoteItem label="Limit of a function at a point">
				The limit of a function f(x) as x approaches a given point A on the curve f(x), has the value L, such that
				for any point B on the curve near A, there always exists a point on the curve closer to A and who's y
				coordinate is closer to L than B's y coordinate.
			</NoteItem> 
			<NoteItem label="Directional limit">
				Limits may be taken from either side of the point in question, left or right. A directional limit
				only has a defined value if a 
			</NoteItem> 
		</Note>
	);
}
