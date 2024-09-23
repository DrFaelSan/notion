import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import cs from "highlight.js/lib/languages/csharp";
import axapta from "highlight.js/lib/languages/axapta";
import "highlight.js/styles/tokyo-night-dark.min.css";

import { RxFontBold, RxFontItalic, RxStrikethrough, RxCode } from "react-icons/rx";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";
import { BubbleButton } from "./BubbleButton";
import { FloatingButton } from "./FloatingButton";
import { initalHtml } from "./initialHtml";

const lowlight = createLowlight(all);

lowlight.register("html", html);
lowlight.register("css", css);
lowlight.register("js", js);
lowlight.register("ts", ts);
lowlight.register("csharp", cs);
lowlight.register("x++", axapta);

export const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    onUpdate({ editor }) {
      console.log("Html: ", editor.getHTML());
      console.log("Json: ", editor.getJSON());
    },
    content: initalHtml,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      <EditorContent className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-violet" editor={editor} />
      {editor && (
        <FloatingMenu
          editor={editor}
          className="bg-zinc-700 py-2 px-1 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex flex-col"
          shouldShow={({ state }) => {
            const { $from } = state.selection;
            const currentLineText = $from.nodeBefore?.textContent;

            return currentLineText === "/";
          }}
        >
          <FloatingButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            children={<LuHeading1 className="w-12 border border-zinc-600 rounded" />}
            title="Cabeçalho 1"
            subTitle="Transforma o texto selecionado em um cabeçalho nível 1 (principal)"
          />
          <FloatingButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            children={<LuHeading2 className="w-12 border border-zinc-600 rounded" />}
            title="Cabeçalho 2"
            subTitle="Transforma o texto selecionado em um cabeçalho nível 2 (secundário)"
          />
          <FloatingButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            children={<LuHeading3 className="w-12 border border-zinc-600 rounded" />}
            title="Cabeçalho 3"
            subTitle="Transforma o texto selecionado em um cabeçalho nível 3 (terciário)"
          />
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600"
          editor={editor}
        >
          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive("bold")}
            >
              <RxFontBold className="w-4 h-5" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive("italic")}
            >
              <RxFontItalic className="w-4 h-5" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive("strike")}
            >
              <RxStrikethrough className="w-4 h-5" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-active={editor.isActive("code")}
            >
              <RxCode className="w-4 h-5" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
};
