import React from "react";
import Link from "next/link";
import { SingOutUser } from "@auth/index";
import { AuthContext } from "@providers/index";
import { GetUsername } from "@db/index";

export function Navigation() {
    const { user, setUser } = React.useContext(AuthContext);
    const [username, setUsername] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (user) {
            GetUsername(user.uid).then((resUsername) => {
                setUsername(resUsername);
            });
        }
    }, [user]);

    return (
        <header className="mt-[2vh] space-y-2">
            <div className="grid items-center grid-cols-2 ">
                <Link href={"/"}>
                    <a className="no-underline">
                        <h1 className="text-6xl">The Marketplace</h1>
                    </a>
                </Link>
                <div>
                    {/* only show when signed in */}
                    {user && username ? (
                        <>
                            <button onClick={() => SingOutUser(setUser)}>
                                Log out
                            </button>
                            <Link href={`/profile/${username}`}>
                                My Profile
                            </Link>
                        </>
                    ) : (
                        <div className="flex items-center justify-end space-x-4">
                            <div className="">
                                <Link href={"/signup"}>
                                    <a className="text-xl no-underline">Join</a>
                                </Link>
                            </div>
                            <div className="">
                                <Link href={"/login"}>
                                    <a className="text-xl no-underline">
                                        Sign in
                                    </a>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="h-0.5 bg-black w-full" />
        </header>
    );
}
