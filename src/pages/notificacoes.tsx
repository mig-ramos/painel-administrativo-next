import { useContext } from "react";
import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";
import { AuthContext } from "../data/contexts/AuthContext";

export default function Notificacoes() {
  const { alternarTema } = useAppData();

  const { user } = useContext(AuthContext);
  
  return (
    <Layout titulo="Notificações" subtitulo="Gerenciamento de pedidos">
      <h1>{user.name}</h1>
      <button onClick={alternarTema}>Alternar Tema</button>
    </Layout>
  );
}
