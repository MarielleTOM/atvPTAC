'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Styles from "./cadastro.module.css";
import Input from "../Componentes/input";
import Usuario from '../Interfaces/usuario';

export default function cadastro(){
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [usuario, setUsuario] = useState<Usuario>({
        nome: '',
        email:'',
        password:'',
        tipo:'cliente'
    })
    const [erroCadastro, setErroCadastro] = useState('')

    const Cadastro = () =>{
        if(email === 'marizinha@gmail.com' && senha === 'marizinha123' && userName === 'Marizinha'){
            router.push('/');
        }else{
            setErroCadastro('Email ou/e senha incorretos');
        }
    };

    return(
        <div className={Styles.centro}>
           <center><p className={Styles.p}>Página de CADASTRO!</p> 
           <br/>
           <input
                className={Styles.input}
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <br/>
            <input
                className={Styles.input}
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}/>
            <br/>
            <br/>
            <input
                className={Styles.input}
                type="userName"
                placeholder="Digite um User Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}/>
            <br />
            <br />
            <button onClick={Cadastro} className={Styles.botao}>Cadastro</button>
            {erroCadastro && <p>{erroCadastro}</p>}
            </center>
        </div>  
    )
}