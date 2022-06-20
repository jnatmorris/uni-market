import type { NextPage } from "next";
import React from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../components/firebase/Intialize";
import { GetServerSideProps } from "next";
import Image from "next/image";
import MetaTags from "../components/Metatags";
import NewPost from "../components/NewPost";
import DisplayItem from "../components/DisplayItem";

export const getServerSideProps: GetServerSideProps = async () => {
    const items = new Array();
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
        items.push(doc.data());
    });

    return {
        props: { obj: { items } },
    };
};

interface Props {
    obj: {
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
    };
}

const Home: NextPage<Props> = ({ obj }) => {
    return (
        <>
            <MetaTags title="Home" />
            <div>
                <NewPost />
                <h1 className="py-[5vh]">Uni Marketplace</h1>
                <div className="grid place-items-top  grid-cols-4 gap-y-[8vh] gap-x-[3vw]">
                    {obj.items.map((value, index) => {
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
