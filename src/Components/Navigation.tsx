import React from "react";
import Link from "next/link";
import { SingOutUser, AuthContext } from "@auth/index";

const Navigation: React.FC = () => {
    const { user, setUser } = React.useContext(AuthContext);

    return (
        <header
            className={user ? "bg-green-400 relative" : "bg-red-400 relative"}
        >
            <div className="flex space-x-10">
                <Link href={"/"}>
                    <a>Home</a>
                </Link>

                {!user && (
                    <>
                        <Link href={"/login"}>
                            <a>Login</a>
                        </Link>
                        <Link href={"/signup"}>
                            <a>Sign up</a>
                        </Link>
                    </>
                )}

                {/* only show when signed in */}
                {user && (
                    <>
                        <button onClick={() => SingOutUser(setUser)}>
                            Log out
                        </button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Navigation;