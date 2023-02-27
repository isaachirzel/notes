
import EditorUtils, { FormatType } from "../editor/Editor.utils";
import styles from "./Toolbar.module.scss";

function bold()
{
	EditorUtils.format(window.getSelection(), FormatType.Bold);
}

export default function Toolbar()
{
	return (
		<div className={styles.Toolbar}>
			<button onClick={bold}>Bold</button>
		</div>
	);
}
