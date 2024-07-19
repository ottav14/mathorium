import styles from "./page.module.css"; 
import SubjectPage from "../../components/SubjectPage/SubjectPage.tsx";
import Note from "../../components/Note/Note.tsx";

export default function Anaylsis() {
	return (
		<SubjectPage title="Analysis">
			test
			<Note className="todo" title="TODO">
				<ul>
					<li>Basic definitions</li>
					<li>Binomial theorem proof</li>
					<li>Derive derivative of f(x) = x</li>
					<li>Power rule proof</li>
				</ul>
			</Note>
		</SubjectPage>
	);
}
