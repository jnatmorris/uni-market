import React from "react";
import { AuthContext } from "./firebase/Auth/AuthProvider";
import AddPost from "./firebase/Actions/AddPost";

const NewPost: React.FC = () => {
    // get user info
    const { user } = React.useContext(AuthContext);

    // post states
    const [itemName, setItemName] = React.useState<string>("");
    const [itemDesc, setItemDesc] = React.useState<string>("");
    const [price, setPrice] = React.useState<number>(0);
    const [image, setImage] = React.useState<File | undefined>(undefined);
    const [imageInfo, setImageInfo] = React.useState<{
        width: number;
        height: number;
    }>({ width: 0, height: 0 });

    const [requiredFilled, setRequiredFilled] = React.useState<boolean>(false);
    const [submitted, setSubmitted] = React.useState<boolean>(true);

    // handlers
    const itemNameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setItemName(e.target.value);
    };
    const itemDescHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setItemDesc(e.target.value);
    };
    const priceHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (!isNaN(parseInt(e.target.value))) {
            setPrice(parseInt(e.target.value));
        }
    };

    // clear inputs when a new post is made
    const clearInputHandler = (): void => {
        setItemName("");
        setItemDesc("");
        setPrice(0);
        setSubmitted(true);
    };

    const handleSetImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        // deconstruct file
        const { files } = event.target;

        // if not null
        if (files !== null) {
            // set image
            setImage(files[0]);

            // set image demensions
            let img = new Image();
            img.src = window.URL.createObjectURL(files[0]);
            img.onload = () => {
                // set width & height info
                setImageInfo({ width: img.width, height: img.height });
            };
        }
    };

    // when input values change, set required true/false
    React.useEffect(() => {
        if (itemName && itemDesc && price && image) {
            setRequiredFilled(true);
        } else {
            setRequiredFilled(false);
        }
    }, [itemName, itemDesc, price, image]);

    return (
        <div>
            {/* if logged in */}
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
                    <div className="bg-orange-400"></div>
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
                            type={"text"}
                            onChange={priceHandler}
                        />

                        <input
                            accept="/image/*"
                            type={"file"}
                            onChange={(e) => handleSetImage(e)}
                        />

                        <button
                            className={
                                submitted && requiredFilled
                                    ? "p-2 bg-blue-400 rounded-lg"
                                    : "p-2 bg-red-400 rounded-lg"
                            }
                            onClick={() => {
                                setSubmitted(false);
                                AddPost(
                                    itemName,
                                    itemDesc,
                                    image,
                                    imageInfo,
                                    price,
                                    user.uid,
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
