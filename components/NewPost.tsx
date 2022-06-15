import React from "react";
import { AuthContext } from "./firebase/Auth/AuthProvider";
import { WriteData } from "./firebase/db/actions";

const NewPost: React.FC = () => {
    const [newPost, setNewPost] = React.useState<boolean>(false);
    const [itemName, setItemName] = React.useState<string>("");
    const [itemDesc, setItemDesc] = React.useState<string>("");

    const { user, setUser } = React.useContext(AuthContext);

    const itemNameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setItemName(e.target.value);
    };

    const itemDescHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setItemDesc(e.target.value);
    };

    return (
        <div>
            {user && (
                <>
                    <div className="flex space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                            onChange={itemNameHandler}
                        />
                        <input
                            placeholder="Discreption"
                            value={itemDesc}
                            onChange={itemDescHandler}
                        />

                        <button
                            className="bg-blue-400 rounded-lg p-2"
                            onClick={() =>
                                WriteData(
                                    user.uid,
                                    "Some name",
                                    itemName,
                                    itemDesc,
                                    setNewPost
                                )
                            }
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
