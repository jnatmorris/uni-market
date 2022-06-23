import { User } from "firebase/auth";

interface ChildrenJSX {
    children: React.ReactNode;
}
interface ContextProps {
    user: User | null;
    setUser: (value: User | null) => void;
}

export type { ChildrenJSX, ContextProps };
