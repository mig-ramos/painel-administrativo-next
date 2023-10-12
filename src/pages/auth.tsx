import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Auth() {
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Autenticação</h1>
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
    </div>
  );
}
