'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Styles from "./login.module.css";
import Input from "../Componentes/input";

export default function Login(){
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errologin, setErroLogin] = useState('')

    const login = () =>{
        if(email === 'marizinha@gmail.com' && senha === 'marizinha123'){
            router.push('/');
        }else{
            setErroLogin('Email ou/e senha incorretos');
        }
    };

    return(
        <div className={Styles.centro}>
           <center><p className={Styles.p}>Página de Login!</p> 
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
            <button onClick={login} className={Styles.botao}>Login</button>
            {errologin && <p>{errologin}</p>}
            </center>
        </div>  
    )
}