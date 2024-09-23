import { Command } from "cmdk";
import { ComandoAtalho } from "./ComandoAtalho";
import { Comandos } from "./comandos";
import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";

export const ComandosMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  // Toggle the menu when ctrl + k is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      //   className="max-w-[700px] mx-auto z-10 pt-16 bg-zinc-900 text-white rounded-lg h-[400px] overflow-y-scroll"
      className="fixed inset-0 flex flex-col z-50 pt-16  p-20 overflow-y-scroll bg-black "
      onOpenChange={setOpen}
      label="Global Command Menu"
    >
      <div className="flex justify-between">
        <Command.Input
          placeholder="Procure Atalhos"
          className="w-2/3 bg-zinc-900 hover:bg-zinc-800 rounded-md p-2 outline-none"
        />
        <button className="text-zinc-50 w-4 h-4" onClick={() => setOpen((prev) => !prev)}>
          <IoIosClose />
        </button>
      </div>
      <Command.Separator className="divide-x divide-zinc-600" />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        {Comandos.map((comando, index) => {
          return (
            <Command.Group
              key={comando.titulo + `${index}`}
              heading={<h1 className="border-b border-zinc-500 text-md font-medium">{comando.titulo}</h1>}
              className="p-2 gap-2"
            >
              <Command.Separator />
              {comando.atalhos.map((comandoItem, index) => {
                const firstItem = index === 0 ? "mt-4" : "";
                return (
                  <Command.Item
                    className={`${firstItem} p-2 ml-2 text-sm text-zinc-400 flex justify-between hover:bg-zinc-600 rounded-lg`}
                  >
                    {comandoItem.titulo}
                    <ComandoAtalho keys={comandoItem.atalho} />
                  </Command.Item>
                );
              })}
            </Command.Group>
          );
        })}
      </Command.List>
    </Command.Dialog>
  );
};
