import styles from "./page.module.css";
import Sidebar from "./components/Sidebar/Sidebar.tsx";

export default function Home() {
	return (
		<>
			<div className={styles.landingTitle}>
				Mathorium
			</div>
			<div className={styles.landingContent}>
				This is a site written and maintained by me, Dom Ottaviano, with the goal of helping others to
				efficiently learn different topics within mathematics. It also serves as an archive of the
				mathematical knowledge I've gathered in my life thus far. If you have any subject requests, or are
				interested in hiring me, I can be best reached at dominicjottaviano@gmail.com 
			</div>
		</>
	);
}
