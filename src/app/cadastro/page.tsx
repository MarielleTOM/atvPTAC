'use client'
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Styles from "./cadastro.module.css";
import Input from "../Componentes/input";
import Usuario from '../Interfaces/usuario';
import NavBar from "../Componentes/navbar"
import { ApiURL } from '../config';

interface ResponseCadastro {
    erro: boolean;
    mensagem: string;
}

export default function cadastro() {
    const router = useRouter();

    const [usuario, setUsuario] = useState<Usuario>({
        nome: '',
        email: '',
        password: '',
        tipo: 'cliente'
    })
    const [erroCadastro, setErroCadastro] = useState<string>('');


    const alterarNome = (novoNome: string) => {
        setUsuario((usuarioAnterior) => ({
            ...usuarioAnterior,
            nome: novoNome,
        }));
    };

    const alterarEmail = (novoEmail: string) => {
        setUsuario((usuarioAnterior) => ({
            ...usuarioAnterior,
            email: novoEmail,
        }));
    };
    const alterarSenha = (novaSenha: string) => {
        setUsuario((usuarioAnterior) => ({
            ...usuarioAnterior,
            password: novaSenha,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!usuario.nome || !usuario.email || !usuario.password) {
            setErroCadastro('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await fetch(`${ApiURL}/auth/cadastro`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuario),
            });

            console.log(response)

            if (!response.ok) {
                throw new Error('Falha na requisição. Verifique o servidor.');
            }

            const data: ResponseCadastro = await response.json();
            const { erro, mensagem } = data;

            if (erro) {
                setErroCadastro(mensagem);
            } else {
                router.push('/login');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            setErroCadastro('Ocorreu um erro. Tente novamente mais tarde.');
        }
    };


    return (
        <div>
            <NavBar />
            <div className={Styles.centro}>
                <center>
                    <p className={Styles.p}>Página de Cadastro!</p>
                    <form className={Styles.form} onSubmit={handleSubmit}>
                        <input
                            className={Styles.input}
                            type="text"
                            id="nome"
                            placeholder="Digite seu nome"
                            value={usuario.nome}
                            onChange={(e) => alterarNome(e.target.value)}
                        />
                        <br />
                        <br />
                        <input
                            className={Styles.input}
                            type="text"
                            id="email"
                            placeholder="Digite seu email"
                            value={usuario.email}
                            onChange={(e) => alterarEmail(e.target.value)}
                        />
                        <br />
                        <br />
                        <input
                            className={Styles.input}
                            type="password"
                            id="password"
                            placeholder="Digite sua senha"
                            value={usuario.password}
                            onChange={(e) => alterarSenha(e.target.value)}
                        />
                        <br />
                        <br />
                        <button className={Styles.botao} type='submit'>Cadastro</button>
                        {erroCadastro && <p className={Styles.erro}> {erroCadastro}</p>}
                    </form>
                </center>
            </div>
        </div>
    );
}
