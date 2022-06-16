import React from "react";
import { AuthContext } from "./firebase/Auth/AuthProvider";
import { AddPost } from "./firebase/db/Writeactions";

const NewPost: React.FC = () => {
    const [itemName, setItemName] = React.useState<string>("");
    const [itemDesc, setItemDesc] = React.useState<string>("");
    const [price, setPrice] = React.useState<number>(0);
    const [submitted, setSubmitted] = React.useState(true);
    const { user } = React.useContext(AuthContext);

    const itemNameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setItemName(e.target.value);
    };

    const itemDescHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setItemDesc(e.target.value);
    };

    const priceHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPrice(parseInt(e.target.value));
    };

    const clearInputHandler = (): void => {
        setItemName("");
        setItemDesc("");
        setPrice(0);
        setSubmitted(true);
        console.log("worked!");
    };

    return (
        <div>
            {user && (
                <>
                    <div className="flex space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p>New Post</p>
                    </div>

                    <div>
                        <input
                            placeholder="Name of item"
                            value={itemName}
                            type={"text"}
                            onChange={itemNameHandler}
                        />
                        <input
                            placeholder="Discreption"
                            value={itemDesc}
                            type={"text"}
                            onChange={itemDescHandler}
                        />
                        <input
                            placeholder="Price"
                            value={price}
                            type={"number"}
                            onChange={priceHandler}
                        />

                        <button
                            className={
                                submitted
                                    ? "p-2 bg-blue-400 rounded-lg"
                                    : "p-2 bg-red-400 rounded-lg"
                            }
                            // disabled={!submitted}
                            onClick={() => {
                                setSubmitted(false);
                                AddPost(
                                    itemName,
                                    itemDesc,
                                    user.uid,
                                    price,
                                    clearInputHandler
                                );
                            }}
                        >
                            Post to market
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default NewPost;
