import styles from "./App.module.scss";
import Editor from "./editor/Editor";

export default function App() {
	return (
		<div className={styles.App}>
			<div className={styles.center}>
				<Editor />
			</div>
		</div>
	);
}
