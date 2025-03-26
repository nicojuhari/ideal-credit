const sources = [
    {
        "sourceType": "user",
        "fetch": "/api/__sitemap__/urls"
    },
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/"
            },
            {
                "loc": "/terms"
            },
            {
                "loc": "/cookies"
            },
            {
                "loc": "/privacy"
            },
            {
                "loc": "/contacte"
            },
            {
                "loc": "/blog"
            },
            {
                "loc": "/despre-noi"
            },
            {
                "loc": "/credit-pentru-afaceri"
            },
            {
                "loc": "/cerere-de-credit-online"
            },
            {
                "loc": "/autoritatea-de-supraveghere"
            },
            {
                "loc": "/credit-pentru-nevoi-personale"
            },
            {
                "loc": "/credit-de-consum"
            },
            {
                "loc": "/credit-auto"
            },
            {
                "loc": "/credit-ipotecar"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:route-rules",
            "description": "Generated from your route rules config.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:route-rules'] }`."
            ]
        },
        "urls": [
            "/",
            "/credit-pentru-nevoi-personale",
            "/credit-pentru-afaceri"
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/credit-pentru-nevoi-personale"
            },
            {
                "loc": "/credit-pentru-afaceri"
            },
            {
                "loc": "/",
                "images": [
                    {
                        "loc": "http://localhost:3000/recenzii/ideal-credit-recenzie-1.webp"
                    },
                    {
                        "loc": "http://localhost:3000/recenzii/ideal-credit-recenzie-2.webp"
                    },
                    {
                        "loc": "http://localhost:3000/recenzii/ideal-credit-recenzie-3.webp"
                    },
                    {
                        "loc": "http://localhost:3000/credit-pentru-afaceri.webp"
                    },
                    {
                        "loc": "http://localhost:3000/credit-pentru-nevoi-personale.webp"
                    },
                    {
                        "loc": "http://localhost:3000/ideal-credit-metode-de-achitare.webp"
                    }
                ]
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
