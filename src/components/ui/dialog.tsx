"use client";

import { Question, X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";

interface GeneralModalProps extends Dialog.DialogProps {
  children: React.ReactElement;
  triggerTitle: React.ReactElement;
}

export default function GeneralModal({
  triggerTitle,
  children,
  ...props
}: GeneralModalProps) {
  return (
    <Dialog.Root {...props}>
      <Dialog.Trigger asChild>{triggerTitle}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-zinc-900 bg-opacity-65 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[90vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none overflow-auto flex flex-col items-center justify-center gap-4">
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
