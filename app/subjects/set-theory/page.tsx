import styles from "./page.module.css"; 
import SubjectPage from "../../components/SubjectPage/SubjectPage.tsx";

export default function SetTheory() {
	return (
		<SubjectPage title="Set Theory">
			Set Theory serves as the foundation of modern mathematics. It was originally formulated in an attempt
			to develop machinery capable of handling outstanding questions within mathematics at the time, much
			like most other subjects in mathematics. The idea of the structure we now refer to as a set, was originally
			featured in a paper by Georg Cantor, titled: On a Property of the Collection of All Real Algebraic
			Numbers, which is now seen as the founding paper of the field. The budding new subject was later
			rigorously axiomatized by Mathematicians Ernst Zermelo, and Abraham Fraenkel, giving rise to the
			"Zermelo-Fraenkel" formalization of Set Theory. Later, the deeply controversial "Axiom of Choice" was
			added to the formalization, now called the "ZFC" formalization, which remains the most commonly used
			axiomization of the field by researchers. All of elemtary mathematics taught in highschool has been
			rebuilt from the ground up using the ZFC axioms, and by extension all advanced mathematics which sits
			atop these foundational results. All new fields also use Set Theory to define their structure, and as
			a result, Set Theory has become something of a universal language within mathematics.
		</SubjectPage>
	);
}
