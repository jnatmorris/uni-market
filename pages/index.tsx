import type { NextPage } from "next";
import React from "react";
import dynamic from "next/dynamic";
import { GetAllPosts } from "@db/index";
import { GetServerSideProps } from "next";
import MetaTags from "../src/Components/Metatags";
import { DisplayItem } from "../src/Components/DisplayItem";

const NewPost = dynamic(() => import("../src/Components/NewPost"), {
    suspense: true,
});

interface singlePost {
    items: {
        username: string;
        author: string;
        imageURL: string;
        imageWidth: number;
        imageHeight: number;
        itemDesc: string;
        itemName: string;
        price: number;
    }[];
}

export const getServerSideProps: GetServerSideProps = async () => {
    const items = await GetAllPosts();
    return {
        props: { items },
    };
};

const Home: NextPage<singlePost> = ({ items }) => {
    return (
        <>
            <MetaTags title="Home" />
            <div>
                <React.Suspense fallback={`Loading...`}>
                    <NewPost />
                </React.Suspense>

                <div className="grid place-items-top  grid-cols-4 gap-y-[8vh] gap-x-[3vw]">
                    {items.map((value, index) => {
                        const {
                            username,
                            author,
                            imageWidth,
                            imageHeight,
                            imageURL,
                            itemDesc,
                            itemName,
                            price,
                        } = value;

                        return (
                            <div key={index}>
                                <DisplayItem
                                    index={index}
                                    username={username}
                                    author={author}
                                    itemName={itemName}
                                    itemDesc={itemDesc}
                                    price={price}
                                    imageWidth={imageWidth}
                                    imageHeight={imageHeight}
                                    imageURL={imageURL}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Home;
