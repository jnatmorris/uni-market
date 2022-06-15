import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <main className="prose dark:prose-invert ">
            <div className="w-screen">
                <div className="mx-[5vw]">
                    <Navigation />
                    {children}
                    <Footer />
                </div>
            </div>
        </main>
    );
};

export default Layout;
