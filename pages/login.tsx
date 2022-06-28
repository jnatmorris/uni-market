import React from "react";
import MetaTags from "../src/Components/Metatags";
import { LoadingSpinner } from "@LoadingSpinner/index";

const LoginComp = React.lazy(() =>
    import("@Login/index").then((mod) => ({ default: mod.LoginComp }))
);

const Login: React.FC = () => {
    return (
        <>
            <MetaTags title={"login"} />
            <React.Suspense fallback={<LoadingSpinner />}>
                <LoginComp />
            </React.Suspense>
        </>
    );
};

export default Login;
