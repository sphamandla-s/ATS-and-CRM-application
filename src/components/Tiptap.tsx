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
            },
            orderedList: {
              keepMarks: true,
            },
          }),],
        content: description,
        editorProps: {
            attributes: {
                class: "max-w-full h-64 px-4 py-2 border rounded-b-md overflow-auto white-space:wrap overflow-x: auto disabled:opacity-50 focus-visible:outline-none",
            },
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML())
        }
    })

    if (!editor) return null;

    return (
        <div className=' max-w-[556px]'>
            <Toolbar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}

export default Tiptap
