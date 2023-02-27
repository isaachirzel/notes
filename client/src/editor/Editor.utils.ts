export enum FormatType
{
	Bold = "bold"
}

export default class EditorUtils
{
	public static format(selection: Selection | null, type: FormatType): void
	{
		if (selection === null)
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
