"use client";

import React from "react";
import { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Undo,
  Redo,
} from "lucide-react";

type Props = {
  editor: Editor | null;
};

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex justify-between items-center py-3 px-4 rounded-tl-md rounded-tr-md gap-2 w-full bg-gray-100 dark:bg-gray-900  border border-gray-300">
      <div className="flex gap-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={editor.isActive("bold") ? "text-blue-600" : ""}
          aria-label="Bold"
        >
          <Bold size={20} />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={editor.isActive("italic") ? "text-blue-600" : ""}
          aria-label="Italic"
        >
          <Italic size={20} />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run()
          }}
          className={editor.isActive("bulletList") ? "text-blue-600" : ""}
          aria-label="Bullet List"
        >
          <List size={20} />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={editor.isActive("orderedList") ? "text-blue-600" : ""}
          aria-label="Ordered List"
        >
          <ListOrdered size={20} />
        </button>
        
      </div>
      <div className="flex gap-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className="text-blue-600"
          aria-label="Undo"
        >
          <Undo size={20} />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className="text-blue-600"
          aria-label="Redo"
        >
          <Redo size={20} />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
