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
                close: "cursor-pointer",
                content: "!text-white bg-black-400",
                title: "text-white font-bold",
                close: "!text-white bg-transparent hover:bg-white/10",
            },
        },
        icons: {
            close: "i-ph-x-bold",
        },
        button: {
            slots: {
                base: "rounded-full cursor-pointer",
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
    },
});
