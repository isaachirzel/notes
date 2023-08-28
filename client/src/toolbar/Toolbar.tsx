
import React from "react";
import EditorUtils, { FormatType } from "../editor/Editor.utils";
import "./Toolbar.scss";

interface Props
{
	onSave?: (() => void),
	onBold?: (() => void)
};

function save(editor: JSX.Element) {
	
}

function bold()
{
	EditorUtils.format(window.getSelection(), FormatType.Bold);
}

export default function Toolbar(props: Props)
{
	return (
		<div className="toolbar">
			<button onClick={props.onSave}>Save</button>
			<button onClick={props.onBold}>Bold</button>
		</div>
	);
}
