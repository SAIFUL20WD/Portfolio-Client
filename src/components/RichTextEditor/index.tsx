import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
// import ImageResize from "tiptap-extension-resize-image";
import ToolBar from "./ToolBar";

export default function RichTextEditor({
	content,
	onChange,
}: {
	content: string;
	onChange: (e: string) => void;
}) {
	const editor = useEditor({
		extensions: [
			StarterKit.configure(),
			TextAlign.configure({
				types: ["heading", "paragraph"],
			}),
			Heading.configure({
				levels: [1, 2, 3],
			}),
			OrderedList.configure({
				HTMLAttributes: {
					class: "list-decimal ml-3",
				},
			}),
			BulletList.configure({
				HTMLAttributes: {
					class: "list-disc ml-3",
				},
			}),
			Link,
			Highlight,
			Underline,
			Image,
			// ImageResize,
		],
		content: content,
		editorProps: {
			attributes: {
				class: "min-h-[500px] border rounded-md bg-slate-50 py-2 px-3 my-5",
			},
		},
		onUpdate: ({ editor }) => {
			onChange(editor.getHTML());
		},
	});

	return (
		<div>
			<ToolBar editor={editor} />
			<EditorContent editor={editor} />
		</div>
	);
}
