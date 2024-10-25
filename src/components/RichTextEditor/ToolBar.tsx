import {
	Heading1,
	Heading2,
	Heading3,
	Code,
	Bold,
	Italic,
	Strikethrough,
	AlignCenter,
	AlignLeft,
	AlignRight,
	Highlighter,
	List,
	ListOrdered,
	Pilcrow,
	Quote,
	Underline,
	Undo,
	Redo,
	SquareSplitVertical,
	ImageUp,
	Link,
} from "lucide-react";
import { useCallback } from "react";
import toast from "react-hot-toast";
import imageUploader from "../../utils/imageUploder";

export default function ToolBar({ editor }: { editor: any }) {
	const active = "bg-[#f9004d] text-white p-1 rounded";

	const setLink = useCallback(() => {
		const previousUrl = editor.getAttributes("link").href;
		const url = window.prompt("URL", previousUrl);

		// cancelled
		if (url === null) {
			return;
		}

		// empty
		if (url === "") {
			editor.chain().focus().extendMarkRange("link").unsetLink().run();

			return;
		}

		// update link
		editor
			.chain()
			.focus()
			.extendMarkRange("link")
			.setLink({ href: url })
			.run();
	}, [editor]);

	if (!editor) return null;

	const addImage = () => {
		const input = document.getElementById("contentImage");
		input!.click();
	};

	const handleImageUpload = async (e: any) => {
		const toastId = toast.loading("Uploading");
		try {
			const res = await imageUploader(e);
			if (res.success) {
				editor.chain().focus().setImage({ src: res.data.url }).run();
				toast.success("Image uploaded!", {
					id: toastId,
					duration: 2000,
				});
			} else {
				toast.error("Image upload failed!", {
					id: toastId,
					duration: 2000,
				});
			}
		} catch (err) {
			toast.error("Something went wrong!", {
				id: toastId,
				duration: 2000,
			});
		}
	};

	const Options = [
		{
			icon: <Heading1 className="size-5" />,
			onClick: () =>
				editor.chain().focus().toggleHeading({ level: 1 }).run(),
			className: editor.isActive("heading", { level: 1 }) ? active : "",
		},
		{
			icon: <Heading2 className="size-5" />,
			onClick: () =>
				editor.chain().focus().toggleHeading({ level: 2 }).run(),
			className: editor.isActive("heading", { level: 2 }) ? active : "",
		},
		{
			icon: <Heading3 className="size-5" />,
			onClick: () =>
				editor.chain().focus().toggleHeading({ level: 3 }).run(),
			className: editor.isActive("heading", { level: 3 }) ? active : "",
		},
		{
			icon: <Pilcrow className="size-5" />,
			onClick: () => editor.chain().focus().setParagraph().run(),
			className: editor.isActive("paragraph") ? active : "",
		},
		{
			icon: <Quote className="size-5" />,
			onClick: () => editor.chain().focus().toggleBlockquote().run(),
			className: editor.isActive("blockquote") ? active : "",
		},
		{
			icon: <Bold className="size-5" />,
			onClick: () => editor.chain().focus().toggleBold().run(),
			disabled: !editor.can().chain().focus().toggleBold().run(),
			className: editor.isActive("bold") ? active : "",
		},
		{
			icon: <Italic className="size-5" />,
			onClick: () => editor.chain().focus().toggleItalic().run(),
			disabled: !editor.can().chain().focus().toggleItalic().run(),
			className: editor.isActive("italic") ? active : "",
		},
		{
			icon: <Underline className="size-5" />,
			onClick: () => editor.chain().focus().toggleUnderline().run(),
			className: editor.isActive("underline") ? active : "",
		},
		{
			icon: <Strikethrough className="size-5" />,
			onClick: () => editor.chain().focus().toggleStrike().run(),
			disabled: !editor.can().chain().focus().toggleStrike().run(),
			className: editor.isActive("strike") ? active : "",
		},
		{
			icon: <AlignLeft className="size-5" />,
			onClick: () => editor.chain().focus().setTextAlign("left").run(),
			className: editor.isActive({ textAlign: "left" }) ? active : "",
		},
		{
			icon: <AlignCenter className="size-5" />,
			onClick: () => editor.chain().focus().setTextAlign("center").run(),
			className: editor.isActive({ textAlign: "center" }) ? active : "",
		},
		{
			icon: <AlignRight className="size-5" />,
			onClick: () => editor.chain().focus().setTextAlign("right").run(),
			className: editor.isActive({ textAlign: "right" }) ? active : "",
		},
		{
			icon: <List className="size-5" />,
			onClick: () => editor.chain().focus().toggleBulletList().run(),
			className: editor.isActive("bulletList") ? active : "",
		},
		{
			icon: <ListOrdered className="size-5" />,
			onClick: () => editor.chain().focus().toggleOrderedList().run(),
			className: editor.isActive("orderedList") ? active : "",
		},
		{
			icon: <ImageUp className="size-5" />,
			onClick: () => addImage(),
			className: editor.isActive("image"),
		},
		{
			icon: <Code className="size-5" />,
			onClick: () => editor.chain().focus().toggleCodeBlock().run(),
			disabled: !editor.can().chain().focus().toggleCode().run(),
			className: editor.isActive("code") ? active : "",
		},
		{
			icon: <Link className="size-5" />,
			onClick: setLink,
			className: editor.isActive("link") ? active : "",
		},
		{
			icon: <Highlighter className="size-5" />,
			onClick: () => editor.chain().focus().toggleHighlight().run(),
			className: editor.isActive("highlight") ? active : "",
		},
		{
			icon: <SquareSplitVertical className="size-5" />,
			onClick: () => editor.chain().focus().setHorizontalRule().run(),
		},
		{
			icon: <Undo className="size-5" />,
			onClick: () => editor.chain().focus().undo().run(),
			disabled: !editor.can().chain().focus().undo().run(),
		},
		{
			icon: <Redo className="size-5" />,
			onClick: () => editor.chain().focus().redo().run(),
			disabled: !editor.can().chain().focus().redo().run(),
		},
	];

	return (
		<div className="border rounded-md p-1.5 mb-1 bg-slate-50 space-x-1 sticky top-10 z-50">
			<input
				type="file"
				hidden
				id="contentImage"
				onChange={handleImageUpload}
			/>
			{Options.map((option, i) => (
				<button
					key={i}
					onClick={option.onClick}
					disabled={option?.disabled}
					className={option?.className}
				>
					{option.icon}
				</button>
			))}
		</div>
	);
}
