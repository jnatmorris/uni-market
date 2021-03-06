import React from "react";
import Footer from "./Footer";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import { LoadingSpinner } from "@LoadingSpinner/index";
import { Navigation } from "@Navigation/index";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    // taken from https://nextjs.org/docs/api-reference/next/router
    const router = useRouter();

    React.useEffect(() => {
        // spinner false
        NProgress.configure({ showSpinner: false });

        // handlers
        const handleStart = () => NProgress.start();
        const handleStop = () => NProgress.done();

        // listen
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);

        // cleanup
        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleStop);
            router.events.off("routeChangeError", handleStop);
        };
    }, [router]);

    return (
        <main className="space-y-[2vh]">
            <Navigation />
            {children}
            <Footer />
        </main>
    );
};

export default Layout;
