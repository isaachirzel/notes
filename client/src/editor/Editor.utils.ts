export enum FormatType
{
	Bold = "bold"
}

export default class EditorUtils
{
	public static save(editor: JSX.Element): void
	{
		
	}

	public static format(selection: Selection | null, type: FormatType): void
	{
		if (selection === null || selection.rangeCount == 0)
			return;

		switch (type)
		{
			case FormatType.Bold:
				const range = selection.getRangeAt(0);
				const bold = document.createElement("b");

				range.surroundContents(bold);

				break;
		}
	}
}
