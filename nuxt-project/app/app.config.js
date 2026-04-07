export default defineAppConfig({
    ui: {
        colors: {
            primary: "brand",
            neutral: "gray",
            secondary: "green",
        },
        modal: {
            slots: {
                overlay: "bg-black-950/50",
                content: "!text-white bg-black-400",
                title: "text-white font-bold",
                close: "cursor-pointer !text-white bg-transparent hover:bg-white/10",
            },
        },
        icons: {
            close: "i-ph-x-bold",
        },
        button: {
            slots: {
                base: "rounded-full cursor-pointer !px-6",
            },
            defaultVariants: {
                color: "primary",
                variant: "solid",
                size: "xl",
            },
        },
        input: {
            slots: {
                root: "w-full",
            },
        },
        textarea: {
            slots: {
                root: "w-full",
            },
        },
        checkboxGroup: {
            slots: {
                fieldset: "flex gap-y-2 gap-x-4",
            },
        },

        select: {
            slots: {
                content: "bg-black-400 !text-white",
            },
        },
    },
});
