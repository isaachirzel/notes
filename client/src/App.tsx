import "./App.scss";
import Editor from "./editor/Editor";
import Toolbar from "./toolbar/Toolbar";

export default function App() {
	const editor = <Editor />;

	return (
		<div className="app">
			<div className="center">
				<Toolbar />
				{editor}
			</div>
		</div>
	);
}
