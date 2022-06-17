import type { NextPage } from "next";
import React from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../components/firebase/Intialize";
import { GetServerSideProps } from "next";
import Image from "next/image";
import NewPost from "../components/NewPost";

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
    const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

    const toBase64 = (str: string) =>
        typeof window === "undefined"
            ? Buffer.from(str).toString("base64")
            : window.btoa(str);

    return (
        <div>
            <NewPost />
            <h1 className="py-[5vh]">Uni Marketplace</h1>
            <div className="grid place-items-top  grid-cols-4 gap-y-[5vh] gap-x-[2vw]">
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
                            className="pb-2 shadow-xl rounded-2xl space-y-[1vh] h-fit  bg-slate-200"
                        >
                            {/* temp image */}

                            <Image
                                className="rounded-b-none rounded-t-2xl"
                                layout="responsive"
                                priority={index <= 4 ? true : false}
                                quality={75}
                                src={imageURL}
                                lazyBoundary={"200px"}
                                alt={itemName}
                                height={imageHeight}
                                width={imageWidth}
                                placeholder="blur"
                                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                    shimmer(700, 475)
                                )}`}
                            />

                            <div className="px-[1vh] space-y-2">
                                {/* https://stackoverflow.com/q/40242378 */}
                                <h3 className="pr-1  font-semibold inline relative overflow-hidden after:right-[100%] after:ease-out after:duration-300 after:bg-slate-600 after:h-0.5  hover:after:right-0 after:absolute after:left-0  after:bottom-[-3px] w-fit">
                                    {itemName}
                                </h3>

                                <div className="space-y-2">
                                    <h4 className="font-normal leading-tight">
                                        <span className="font-semibold">
                                            Sold by:
                                        </span>{" "}
                                        {username}
                                    </h4>
                                    <h4 className="font-normal leading-tight">
                                        <span className="font-semibold">
                                            Price:
                                        </span>{" "}
                                        ${price}
                                    </h4>
                                    <h4 className="font-normal leading-tight">
                                        <span className="font-semibold">
                                            Item Discription:
                                        </span>{" "}
                                        {itemDesc}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
