import { getUser } from "@/app/utils/serverActions"
import Menu from "@/app/Componentes/menu"
import { redirect } from "next/navigation"
import { ListMesasReserva } from "./listasMesasReserva"
import { getMesa } from "@/app/utils/mesas"
export default async function NovaReserva() {
    const user = await getUser();
    const mesas = await getMesa();
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
            <Menu user={user} />
            <ListMesasReserva mesas={mesas} />
        </div>
    );
}