import { ComponentProps, ReactNode } from "react";

export interface FloatingButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  title: string;
  subTitle: string;
  onClick: () => void;
}

export function FloatingButton({ onClick, children: ChildrenIcon, title, subTitle }: FloatingButtonProps) {
  return (
    <button className="flex items-center gap-2 p-1 roundend min-w-[280px] hover:bg-zinc-600" onClick={() => onClick()}>
      {ChildrenIcon}
      <div className="flex flex-col text-left">
        <span className="text-sm">{title}</span>
        <span className="text-xs text-zinc-400">{subTitle}</span>
      </div>
    </button>
  );
}
