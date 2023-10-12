import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Auth() {
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submeter() {
    if(modo === 'login') {
      console.log('login')
    } else {
      console.log('cadastrar')
    }
  }

  return (
    <div className={`flex flex-col h-sreen items-center 
    justify-center
    `}>

   
    <div className={`w-1/2`}>
      <h1 className={`text-xl font-bold mb-5`}>{modo === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma'}</h1>
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
      <button onClick={submeter} className={`
      w-full bg-indigo-500 hover:bg-indigo-400
      text-white rounded-lg px-4 py-3 mt-6
      `}>
        {modo === 'login' ? 'Entrar' : 'Cadastrar'}
      </button>
    </div>
    </div>
  );
}
