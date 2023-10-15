import Image from "next/image";
import loading from "public/loading.gif";
import { AuthContext } from "../../data/contexts/AuthContext";
import { useContext } from "react";
import Router from "next/router";

export default function ForcarAutenticacao(props: any) {
  const { user, carregando, isAuthenticated } = useContext(AuthContext);

  function renderizarConteudo() {
    return (
      <>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                if(!document.cookie?.includes("@holistic.token")) {
                window.location.href = "/signin"
            } 
            `,
          }}
        />

        {props.children}
      </>
    );
  }

  function renderizarCarregando() {
    return (
      <div
        className={`
                flex justify-center items-center h-screen
            `}
      >
        <Image src={loading} alt="Carregando" />
      </div>
    );
  }

  // console.log(carregando, user, isAuthenticated);

  if (!carregando && isAuthenticated) {
    return renderizarConteudo();
  } else if (carregando) {
    return renderizarCarregando();
  } else {
    Router.push("/signin");
    return null;
  }
}
