import { CaretDown } from "@phosphor-icons/react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface GeneralDropdownProps {
  children: React.ReactElement[];
  buttonLabel: React.ReactElement;
  showTriggerCaret?: boolean;
}

export default function GeneralDropdown({
  children,
  buttonLabel,
  showTriggerCaret = true,
}: GeneralDropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="p-2 text-base font-semibold outline-none flex items-center gap-2 group">
        {buttonLabel}
        {showTriggerCaret && (
          <CaretDown
            className="fill-white duration-150 group-data-[state=open]:rotate-180"
            size={16}
            weight="bold"
          />
        )}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className="bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut transition-all text-black"
          sideOffset={5}
        >
          {children}

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
