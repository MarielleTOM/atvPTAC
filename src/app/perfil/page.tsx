import PerfilUsuario from '../Componentes/PerfilUsuario';

const PaginaPerfil = () => {
    const usuario = {
        nome: 'Marielle Toldo Ortega Martins',
        email: 'marielle@gmail.com',
        password: '12345678',
        tipo: "admin"
    };

    return (
        <div>
            <h1>Página Perfil</h1>
            <PerfilUsuario usuario={usuario} />
        </div>
    );
};

export default PaginaPerfil;
