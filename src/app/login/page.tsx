'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Styles from "./login.module.css";
import Usuario from '../Interfaces/usuario';

export default function Login(){
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [userName, setUserName] = useState(''); // Adicionado o estado userName
    const [errologin, setErroLogin] = useState('');
    const [usuarios, setUsuarios] = useState<Usuario[]>([
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
            tipo: "Cliente"
        }
    ]);

    // Função para realizar o login
    const login = () => {
        const usuarioEncontrado = usuarios.find(user => user.email === email && user.password === senha);
        
        if (usuarioEncontrado) {
            router.push('/'); // Redireciona para a página principal
        } else {
            setErroLogin('Email ou senha incorretos');
        }
    };

    // Evento de submit do formulário
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        login(); // Chama a função de login
    };

    useEffect(() => {
        // Exemplo de como você pode buscar usuários de um arquivo JSON
        fetch('/data/usuario.json')
        .then((dados) => dados.json())
        .then((dado) => setUsuarios(dado))  // Atualiza a lista de usuários
        .catch((error) => console.log(error));
    }, []);

    return (
        <div style={{ alignContent: "center", verticalAlign: 'center', height: '100%', padding: '30px' }}>
            <form onSubmit={onSubmit} className={Styles.form}>
                <h1 className={Styles.h1}>Login</h1>
                <div>
                    <label className={Styles.label} htmlFor="userName">User Name:</label>
                    <input 
                        type="text" 
                        id="userName" 
                        value={userName} // Agora está vinculado ao estado userName
                        className={Styles.input}
                        placeholder="Digite um User Name"
                        onChange={(e) => {setUserName(e.target.value)}} // Atualiza o estado com o valor digitado
                    />
                </div>
                <div>
                    <label className={Styles.label} htmlFor="email">Email:</label>
                    <input 
                        type="text" 
                        id="email" 
                        value={email} 
                        className={Styles.input}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                </div>
                <div>
                    <label className={Styles.label} htmlFor="senha">Senha:</label>
                    <input 
                        type="password" 
                        id="senha" 
                        value={senha}
                        className={Styles.input}
                        onChange={(e) => {setSenha(e.target.value)}}
                    />
                </div>
                <button className={Styles.button} type="submit">Olá</button>
                <p className={Styles.p} onClick={() => { router.push('/Cadastrar')}}>Criar novo cadastro</p>
            </form>
       </div>
 );
}

/* CÓDIGO ANTERIOR LIMPO: DONT "aniPTAC" */