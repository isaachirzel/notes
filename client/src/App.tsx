import styles from "./App.module.scss";
import Editor from "./editor/Editor";
import Toolbar from "./toolbar/Toolbar";

export default function App() {
	return (
		<div className={styles.App}>
			<div className={styles.center}>
				<Toolbar />
				<Editor />
			</div>
		</div>
	);
}
