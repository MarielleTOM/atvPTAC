import { fecthUser } from "@/app/utils/auth";
import Menu from "@/app/Componentes/menu";
import NavBar from "@/app/Componentes/navbar";
import { ListMesasReserva } from "./listasMesasReserva";
import { getMesa } from "@/app/utils/mesas";

export default async function NovaReserva() {
    const user = await fecthUser();
    const mesas = await getMesa();

    return (
        <div>
            <NavBar />
            <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
                <Menu user={user} />
                <ListMesasReserva mesas={mesas} />
            </div>
        </div>
    );
}