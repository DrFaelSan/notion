import { Editor } from "./components/Editor";
import { ComandosMenu } from "./components/Editor/ComandosMenu";

export const App = () => {
  return (
    <div className="min-h-screen p-8 text-zinc-50 bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="bg-zinc-800 w-[1110px] mx-auto rounded-xl min-h-[700px] shadow-sm border border-black/20 grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-900 border-r border-r-zinc-700 p-4 rounded-lg">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400"></button>
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400"></button>
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400"></button>
          </div>
          <h1 className="mt-2 font-semibold text-zinc-500 flex justify-center p-2">Editorzinho do Rafa :)</h1>
        </aside>
        <main className="p-4">
          <ComandosMenu />
          <Editor />
        </main>
      </div>
    </div>
  );
};
