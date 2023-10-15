import { useState, useContext } from "react";
import AuthInput from "../components/auth/AuthInput";
import Image from "next/image";
import figura from "public/background.png";
import imgLoading from "public/loading.gif";
import { toast } from "react-toastify";
import { AuthContext } from "../data/contexts/AuthContext";
import { canSSRGuest } from '../utils/canSSRGuest';
import  router  from "next/router";

export default function Auth() {
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn, isAuthenticated } = useContext(AuthContext);

 function redirectPage(){
   router.push('/')
  }

  function clearForm() {
    setEmail("");
    setPassword("");
  }

  async function submeter() {
    if (modo === "login") {
      if (email === "" || password === "") {
        toast.warning("PREENCHA OS DADOS...");
        return;
      }
      setLoading(true);

      let data = {
        email,
        password,
      };

      await signIn(data);
      // clearForm();
      setLoading(false);
    } else {
      console.log("cadastrar");
    }
  }

  return (
      <div className="flex h-screen justify-center items-center">
      <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
        <Image
          src={figura}
          alt="Image da tela de autenticação"
          priority={true}
          style={{
            width: "auto",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </div>

      <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
        <h1 className={`text-3xl font-bold mb-5`}>
          {modo === "login"
            ? "Entre com a sua conta"
            : "Cadastre-se na plataforma"}
        </h1>
        <AuthInput
          label="Email"
          tipo="email"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <AuthInput
          label="Senha"
          tipo="password"
          valor={password}
          valorMudou={setPassword}
          obrigatorio
        />
        <AuthInput
          label="Confirmação de Senha"
          tipo="password"
          valor={password}
          valorMudou={setPassword}
          obrigatorio
          naoRenderizarQuando={true}
        />
        <button
          onClick={submeter}
          disabled={loading}
          className={`
          flex justify-center
      w-full bg-indigo-500 hover:bg-indigo-400
      text-white rounded-lg px-4 py-3 mt-6
      `}
        >
          <Image
            src={imgLoading}
            alt="Loading"
            hidden={!loading}
            width={24}
            className="mr-2"
          />
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>
      </div>
    </div>
  )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {}
  }
})
