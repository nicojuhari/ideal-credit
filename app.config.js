export default defineAppConfig({
    ui: {
        colors: {
            primary: "brand",
            neutral: "gray",
            secondary: "green",
        },
        modal: {
            slots: {
                close: "cursor-pointer",
            },
        },
        icons: {
            close: "i-ph-x-bold",
        },
        button: {
            slots: {
                base: "!px-4 rounded-full cursor-pointer",
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
