import { ComponentProps } from "react";

interface ComandoAtalhoProps extends ComponentProps<"kbd"> {
  keys: string[];
}

export const ComandoAtalho = ({ keys }: ComandoAtalhoProps) => {
  return (
    <span>
      {keys &&
        keys.map((key: string, index: number) => {
          const lastKey = keys.length - 1 === index;
          return (
            <>
              <kbd className="bg-zinc-300 text-zinc-700 p-1 rounded border border-zinc-200" key={index}>
                {key}
              </kbd>
              {lastKey ? "" : <span className="px-1.5">+</span>}
            </>
          );
        })}
    </span>
  );
};
