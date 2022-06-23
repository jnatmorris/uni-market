import React from "react";
import { GetCurrentInfo } from "../utils/GetCurrentInfo";
import { User } from "firebase/auth";
import { app } from "@config/Intialize";

import { ChildrenJSX, ContextProps } from "../types/types";

// create auth context
const AuthContext = React.createContext<ContextProps>({
    user: null,
    setUser: (vale: User | null) => {},
});

const AuthProvider: React.FC<ChildrenJSX> = ({ children }) => {
    const [user, setUser] = React.useState<User | null>(null);

    // on page load, get info
    React.useEffect(() => {
        GetCurrentInfo(app, setUser);
    }, []);

    // context to be passed down
    const context = {
        user,
        setUser,
    };

    return (
        <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    );
};

export { AuthContext,AuthProvider };
