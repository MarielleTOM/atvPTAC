import { useState } from "react";
import PerfilUsuario from "../Interfaces/usuario";
import Usuario from "../Interfaces/usuario";

const PaginaPerfil = () =>{
    const [usuario, setUsuario]= useState <Usuario>()
    setUsuario({nome: 'jose', idade: 23})
    
    return (
        <div>
            <h1>Página Perfil</h1>
        </div>
    )
}

export default PaginaPerfil;