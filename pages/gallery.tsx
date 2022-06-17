import React from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../components/firebase/Intialize";
import { GetServerSideProps } from "next";
import Image from "next/image";

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

const Gallery: React.FC<Props> = ({ obj }) => {
    console.log(obj.items);
    return (
        <div>
            <h1 className="py-[5vh]">Uni Marketplace</h1>
            <div className="grid grid-cols-3 gap-2">
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
                        <div
                            key={index}
                            className="p-2 rounded-2xl bg-slate-200"
                        >
                            {/* temp image */}

                            <div className="relative ">
                                <Image
                                    src={imageURL}
                                    alt={itemName}
                                    height={imageHeight}
                                    width={imageWidth}
                                    className="rounded-lg"
                                />
                            </div>

                            <h3 className="">{itemName}</h3>

                            <div className="h-[0.15rem] my-1 bg-black" />

                            <div className="space-y-1">
                                <p>
                                    <span className="font-semibold">
                                        Sold by:
                                    </span>{" "}
                                    {username}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Price:
                                    </span>{" "}
                                    {price}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Item Discription:
                                    </span>{" "}
                                    {itemDesc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Gallery;
