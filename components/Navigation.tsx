import React from "react";
import Link from "next/link";
import { SingOutUser } from "./firebase/Auth/actions";
import { AuthContext } from "./firebase/Auth/AuthProvider";
import { app } from "./firebase/Intialize";

const Navigation: React.FC = () => {
    const { user, setUser } = React.useContext(AuthContext);

    return (
        <header className={user ? "bg-green-400" : "bg-red-400"}>
            <div className="flex space-x-10">
                <Link href={"/"}>
                    <a>Home</a>
                </Link>
                <Link href={"/login"}>
                    <a>Login</a>
                </Link>
                <Link href={"/signup"}>
                    <a>Sign up</a>
                </Link>

                {/* only show when signed in */}
                {user && (
                    <>
                        <button onClick={() => SingOutUser(setUser)}>
                            Log out
                        </button>
                        <Link href={"/gallery"}>
                            <a>Gallery</a>
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Navigation;
