import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/Components/Layout";
import React from "react";
import { AuthProvider } from "@auth/index";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthProvider>
    );
}

export default MyApp;
