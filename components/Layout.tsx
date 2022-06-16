import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <main className="prose prose-h1:m-0 prose-h2:m-0 prose-h3:m-0 prose-h4:m-0 prose-p:m-0 prose-img:m-0 dark:prose-invert">
            <div className="w-screen">
                <div className="mx-[5vw]">
                    <Navigation />
                    <div className="">{children}</div>
                    <Footer />
                </div>
            </div>
        </main>
    );
};

export default Layout;
