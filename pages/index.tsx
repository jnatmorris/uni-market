import type { NextPage } from "next";
import Head from "next/head";
import NewPost from "../components/NewPost";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Uni Market</title>
                <meta name="description" content="The _______ market" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NewPost />
        </>
    );
};

export default Home;
