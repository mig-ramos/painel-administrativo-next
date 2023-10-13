import { createContext, ReactNode, useState } from "react";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import Router from "next/router";
import { api } from "../../services/apiClient";
import { toast } from 'react-toastify';

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
};

type UserProps = {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
};

type SignInProps = {
  email: string;
  password: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  try {
    destroyCookie(undefined, "@nextauth.token");
    Router.push("/signin");
  } catch (error) {
    console.log("erro ao deslogar");
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInProps) {
    // console.log("EMAIL", email)
    try {
      const response = await api.post("/auth", {
        email,
        password,
      });
       console.log(response.data.user);

      const { accessToken } = response.data;
      const { id, name, phone, cpf } = response.data.user;

      setCookie(undefined, "@nextauth.token", accessToken, {
        maxAge: 60 * 60 * 24 * 30, // Expirar em 1 mes
        path: "/", // Quais caminhos, todos terão acesso ao cookie
      });
      
      setUser({
        id,
        name,
        email,
        phone,
        cpf,
      });

      // console.log("NOME",name)

      // passar para as proximas requisiçoes o nosso token
      api.defaults.headers['Authorization'] = `Bearer ${accessToken}`

      toast.success('Loagado com sucesso!');

      // Redirecionar o user para a página /index
      Router.push('/')

    } catch (err) {
      toast.error('Erro ao acessar!');
      console.log("ERRO AO ACESSAR", err);
    }
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
