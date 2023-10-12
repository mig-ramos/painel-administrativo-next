import { IconeLogo, IconeAjustes, IconeCasa, IconeSino, IconeSair } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside className={`flex flex-col
    dark:bg-gray-900 dark:text-gray-200
    `}>
      <div
        className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-200 to-purple-400
                h-20 w-20 p-2
            `}
      >
        {IconeLogo}
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" texto="Home" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
      <ul>
      <MenuItem texto="Sair" icone={IconeSair} onClick={() => console.log('Logout')} 
               className={`
               text-red-600 dark:text-red-400
               hover:bg-red-400 hover:text-white
               dark:hover:text-white
               `}
               />    
      </ul>
    </aside>
  );
}
