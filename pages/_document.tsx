import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="prose bg-white dark:bg-black prose-h1:m-0 prose-h2:m-0 prose-h3:m-0 prose-h4:m-0 prose-p:m-0 prose-img:m-0 dark:prose-invert">
                <div className="w-screen">
                    <div className="mx-[3vw]">
                        <Main />
                        <NextScript />
                    </div>
                </div>
            </body>
        </Html>
    );
}
