import type { NextPage } from "next";
import React from "react";
import { GetAllPosts } from "../src/firebase/db/utils/GetAllPosts";
import { GetServerSideProps } from "next";
import MetaTags from "../src/Components/Metatags";
import NewPost from "../src/Components/NewPost";
import DisplayItem from "../src/Components/DisplayItem";

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
                <NewPost />
                <h1 className="py-[5vh]">Uni Marketplace</h1>
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
