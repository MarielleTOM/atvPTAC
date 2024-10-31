'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Styles from "./login.module.css";
import Input from "../Componentes/input";
import Usuario from '../Interfaces/usuario';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errologin, setErroLogin] = useState('');
    const [usuario, setUsuario] = useState<Usuario[]>([
        {
            id: 1,
            nome: "Anielly",
            email: "divamaior@gmial.com",
            password: "divas123",
            tipo: "admin"
        },
        {
            id: 2,
            nome: "Marielle",
            email: "divamenos@gmial.com",
            password: "divamenor123",
            tipo: "cliente"
        }
    ]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const Usuario = usuario.find((user) => user.email === email && user.password === senha);
        console.log(usuario);

        // Aqui você pode adicionar lógica para redirecionar ou tratar o login
        if (Usuario) {
            router.push('/'); // ou outra página
        } else {
            setErroLogin('Email ou/e senha incorretos');
        }
    };

    useEffect(() => {
        fetch('/data/usuario.json')
            .then((dados) => dados.json())
            .then((dado) => console.log(dado))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={Styles.centro}>
            <center>
                <p className={Styles.p}>Página de Login!</p>
                <br />
                <form onSubmit={onSubmit}>
                    <input
                        className={Styles.input}
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <br />
                    <input
                        className={Styles.input}
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} />
                    <br />
                    <br />
                    <button type="submit" className={Styles.botao}>Login</button>
                    {errologin && <p>{errologin}</p>}
                </form>
            </center>
        </div>
    );
}
