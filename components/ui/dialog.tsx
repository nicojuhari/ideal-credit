"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"

import { cn } from "@/lib/utils"

function Dialog({ ...props }: DialogPrimitive.Root.Props) {
 return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({ ...props }: DialogPrimitive.Trigger.Props) {
 return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({ ...props }: DialogPrimitive.Portal.Props) {
 return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({ ...props }: DialogPrimitive.Close.Props) {
 return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
 className,
 ...props
}: DialogPrimitive.Backdrop.Props) {
 return (
 <DialogPrimitive.Backdrop
 data-slot="dialog-overlay"
 className={cn(
"fixed inset-0 isolate z-50 bg-black/70 duration-100 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
 className
 )}
 {...props}
 />
 )
}

function DialogContent({
 className,
 children,
 showCloseButton = true,
 ...props
}: DialogPrimitive.Popup.Props & {
 showCloseButton?: boolean
}) {
 return (
 <DialogPortal>
 <DialogOverlay />
 <DialogPrimitive.Popup
 data-slot="dialog-content"
 className={cn(
"dc fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-5 border border-dc-line bg-dc-surface p-8 text-[15px] text-dc-text duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
 className
 )}
 {...props}
 >
 {children}
 {showCloseButton && (
 <DialogPrimitive.Close
 data-slot="dialog-close"
 className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center border border-dc-line text-dc-text-muted transition-colors duration-[120ms] hover:border-dc-line-hover hover:text-dc-text"
 >
 <span className="font-dc-mono text-base leading-none">×</span>
 <span className="sr-only">Închide</span>
 </DialogPrimitive.Close>
 )}
 </DialogPrimitive.Popup>
 </DialogPortal>
 )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
 return (
 <div
 data-slot="dialog-header"
 className={cn("flex flex-col gap-2 pr-6", className)}
 {...props}
 />
 )
}

function DialogFooter({
 className,
 showCloseButton = false,
 children,
 ...props
}: React.ComponentProps<"div"> & {
 showCloseButton?: boolean
}) {
 return (
 <div
 data-slot="dialog-footer"
 className={cn(
"-mx-8 -mb-8 flex flex-col-reverse gap-3 border-t border-dc-line p-6 sm:flex-row sm:justify-end",
 className
 )}
 {...props}
 >
 {children}
 {showCloseButton && (
 <DialogPrimitive.Close className="border border-dc-line px-5 py-2.5 text-[15px] font-semibold text-dc-text transition-colors duration-[120ms] hover:border-dc-line-hover">
 Închide
 </DialogPrimitive.Close>
 )}
 </div>
 )
}

function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
 return (
 <DialogPrimitive.Title
 data-slot="dialog-title"
 className={cn(
"text-xl tracking-[-.02em] text-dc-text",
 className
 )}
 {...props}
 />
 )
}

function DialogDescription({
 className,
 ...props
}: DialogPrimitive.Description.Props) {
 return (
 <DialogPrimitive.Description
 data-slot="dialog-description"
 className={cn(
"text-[15px] leading-[1.55] text-dc-text-muted *:[a]:underline *:[a]:underline-offset-4 *:[a]:hover:text-dc-text",
 className
 )}
 {...props}
 />
 )
}

export {
 Dialog,
 DialogClose,
 DialogContent,
 DialogDescription,
 DialogFooter,
 DialogHeader,
 DialogOverlay,
 DialogPortal,
 DialogTitle,
 DialogTrigger,
}
