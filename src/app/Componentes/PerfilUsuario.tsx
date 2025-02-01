import Usuario from '../Interfaces/usuario';

const PerfilUsuario = ({ usuario }: { usuario: Usuario }) => {
    return (
        <div>
            <h2>{usuario.nome}</h2>
            <p>Email: {usuario.email}</p>
            <p>Tipo: {usuario.tipo}</p>
        </div>
    );
};

export default PerfilUsuario;
