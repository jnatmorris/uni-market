import React from "react";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { DisplayItem } from "../../src/Components/DisplayItem";
import { ValidateUsername, GetUsernamePosts } from "@db/index";

import MetaTags from "../../src/Components/Metatags";

interface singlePost {
    username: string;
    author: string;
    itemName: string;
    itemDesc: string;
    price: number;
    imageWidth: number;
    imageHeight: number;
    imageURL: string;
}

interface Props {
    userInfo: {
        username: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        contactPref: string;
        email: string;
        langPref: string;
    };
    posts: singlePost[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const error = {
        userInfo: false,
        posts: [],
    };

    const errorProps = {
        props: { error },
    };

    // fail if context.params does not exist or the username is not a string
    if (!context.params || typeof context.params["username"] !== "string") {
        return errorProps;
    }

    // get username from url
    const urlUsername = context.params["username"];

    // if user is valid, then get posts, else return userInfo as false.
    // This means only make second db api call if user exists
    const { userInfo, posts } = await ValidateUsername(urlUsername).then(
        async (userInfo) => {
            // if user does not exist, return false with no posts
            if (!userInfo) return error;

            // get posts
            const posts = await GetUsernamePosts(urlUsername);
            return { userInfo, posts };
        }
    );

    // props to propagate page
    return {
        props: {
            userInfo: userInfo,
            posts: posts,
        },
    };
};

const Profile: NextPage<Props> = ({ userInfo, posts }) => {
    const {
        username,
        firstName,
        lastName,
        phoneNumber,
        contactPref,
        email,
        langPref,
    } = userInfo;

    // if user exists
    return userInfo ? (
        <>
            <MetaTags title={username + "'s Profile"} />

            <div className="pt-[7vh]">
                <div className="grid grid-cols-7">
                    {/* left col */}
                    <div className="mx-[2vw] col-span-4">
                        <h1>{username}&apos;s Profile</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>About</th>
                                </tr>
                                <tr></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Full name</td>
                                    <td>{firstName + " " + lastName}</td>
                                </tr>
                                <tr>
                                    <td>Contact</td>
                                    <td>
                                        {contactPref === "phone"
                                            ? phoneNumber
                                            : email}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Langguege</td>
                                    <td>{langPref}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* right col */}
                    <div className="col-span-3 divide-x-2 divide-slate-500">
                        <h2>On the market</h2>

                        <div className="h-[80vh] pt-5  overflow-scroll space-y-[8vh]">
                            {posts.map(
                                (singlePost: singlePost, index: number) => {
                                    const {
                                        author,
                                        itemName,
                                        itemDesc,
                                        price,
                                        imageWidth,
                                        imageHeight,
                                        imageURL,
                                    } = singlePost;

                                    return (
                                        <div key={index} className="mx-[20%]">
                                            <DisplayItem
                                                index={index}
                                                username={userInfo.firstName}
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
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <div>Username not found</div>
    );
};

export default Profile;
