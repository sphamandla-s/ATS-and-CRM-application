'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './toolbar'

type RichtextProps = {
    description: string,
    onChange: (richText: string) => void
}

const Tiptap = ({ description, onChange }: RichtextProps) => {
    const editor = useEditor({
        extensions: [StarterKit.configure({
            bulletList: {
                keepMarks: true,
                keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
            },
            orderedList: {
                keepMarks: true,
                keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
            },
        }),],
        content: description,
        editorProps: {
            attributes: {
                class: "description-textarea resize-y max-w-full h-64 px-4 py-2 border rounded-b-md overflow-auto  overflow-x: auto disabled:opacity-50 focus-visible:outline-none",
            },
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML())
        }
    })

    if (!editor) return null;

    return (
        <div>
            <Toolbar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}

export default Tiptap
