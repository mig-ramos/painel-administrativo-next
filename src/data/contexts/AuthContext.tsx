import { createContext, ReactNode, useState } from "react";
import { UserType } from "../../modulos/login/types/UserType";

type AuthContextData = {
  user: UserType;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
};

type SignInProps = {
  email: string;
  password: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserType>()
    const isAuthenticated = !!user;

    async function signIn({email, password}: SignInProps) {
        console.log("EMAIL", email)
    }
  return (
    <AuthContext.Provider value={{user, isAuthenticated, signIn}}>
        {children}
    </AuthContext.Provider>
  );
}
