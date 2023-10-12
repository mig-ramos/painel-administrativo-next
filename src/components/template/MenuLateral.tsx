import { IconeLogo, IconeAjustes, IconeCasa, IconeSino } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside>
      <div
        className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-200 to-purple-400
                h-20 w-20 p-2
            `}
      >
        {IconeLogo}
      </div>
      <ul>
        <MenuItem url="/" texto="Home" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
    </aside>
  );
}
