import React from "react";
import { AuthContext } from "../src/firebase/Auth/api/AuthProvider";
import { AddUser } from "@auth/index";
import MetaTags from "../src/Components/Metatags";

const Signup: React.FC = () => {
    const { user, setUser } = React.useContext(AuthContext);

    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [username, setUsername] = React.useState<string>("");
    const [firstName, setFirstName] = React.useState<string>("");
    const [lastName, setLastName] = React.useState<string>("");
    const [phoneNumber, setPhoneNumber] = React.useState<string>("");
    const [contactPref, setContactPref] = React.useState<string>("");
    const [langPref, setLangPref] = React.useState<string>("");

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    };

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
    };

    const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUsername(e.target.value);
    };

    const showPasswordHandler = (): void => {
        setShowPassword(!showPassword);
    };

    const firstNameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFirstName(e.target.value);
    };

    const lastNameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setLastName(e.target.value);
    };

    const phoneNumberHandler = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setPhoneNumber(e.target.value);
    };

    const contactHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setContactPref(e.target.value);
    };

    const langPrefHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setLangPref(e.target.value);
    };

    return (
        <>
            <MetaTags title={"Signup"} />
            <div>
                <input
                    type={"text"}
                    placeholder="Email"
                    onChange={(e) => emailHandler(e)}
                    value={email}
                />
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => passwordHandler(e)}
                    value={password}
                />
                <input
                    value={username}
                    type={"text"}
                    placeholder={"Username"}
                    onChange={(e) => usernameHandler(e)}
                />
                <input
                    value={firstName}
                    type={"text"}
                    placeholder={"First name"}
                    onChange={(e) => firstNameHandler(e)}
                />
                <input
                    value={lastName}
                    type={"text"}
                    placeholder={"First name"}
                    onChange={(e) => lastNameHandler(e)}
                />
                <input
                    value={phoneNumber}
                    type={"text"}
                    placeholder={"Phone number"}
                    onChange={(e) => phoneNumberHandler(e)}
                />
                <p>email</p>
                <input
                    value={"email"}
                    checked={contactPref === "email"}
                    type={"radio"}
                    onChange={(e) => contactHandler(e)}
                />
                <p>phone</p>
                <input
                    value={"phone"}
                    type={"radio"}
                    checked={contactPref === "phone"}
                    onChange={(e) => contactHandler(e)}
                />
                <p>English</p>
                <input
                    value={"German"}
                    checked={langPref === "German"}
                    type={"radio"}
                    onChange={(e) => langPrefHandler(e)}
                />
                <p>German</p>
                <input
                    value={"English"}
                    type={"radio"}
                    checked={langPref === "English"}
                    onChange={(e) => langPrefHandler(e)}
                />

                <button onClick={showPasswordHandler}>
                    {showPassword ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                            />
                        </svg>
                    )}
                </button>
                <button
                    onClick={() =>
                        AddUser(
                            email,
                            username,
                            password,
                            setUser,
                            firstName,
                            lastName,
                            phoneNumber,
                            contactPref,
                            langPref
                        )
                    }
                >
                    Sign up
                </button>
            </div>
        </>
    );
};

export default Signup;
