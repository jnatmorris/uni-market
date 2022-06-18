import Head from "next/head";
import React from "react";

interface Props {
    title: string;
    description?: string;
    image?: string;
}

const MetaTags: React.FC<Props> = ({
    title,
    description = "A marketplace with the aim of reducing waist by supporting the mindset from the proverbial expression, one man's trash is another man's treasure.",
    image = "https://firebasestorage.googleapis.com/v0/b/uni-market-f02ac.appspot.com/o/usedClothing.jpg?alt=media&token=ca61801d-9d13-4be5-b146-037abdc8fd27",
}) => {
    const fullTitle = "The Marketplace | " + title;

    return (
        <Head>
            {/* set title of webpage */}
            <title>{fullTitle}</title>
            {/* description of webpage */}
            <meta name="description" content={description} />

            {/* viewport */}
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            {/* author */}
            <meta name="author" content="Justin Morris <justin@jnmorris.dev>" />

            {/* character type */}
            <meta charSet="UTF-8" />

            {/* theme-color based on light/dark mode */}
            <meta
                name="theme-color"
                media="(prefers-color-scheme: light)"
                content="white"
            />
            <meta
                name="theme-color"
                media="(prefers-color-scheme: dark)"
                content="black"
            />

            {/* twitter meta tags */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@NatHasAChat" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* tags for sharing */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="Marketplace" />
        </Head>
    );
};

export default MetaTags;
