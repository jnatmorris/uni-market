import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@providers/index";
import Layout from "../src/Components/Layout";

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
