import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <main>
            <Navigation />
            {children}
            <Footer />
        </main>
    );
};

export default Layout;
