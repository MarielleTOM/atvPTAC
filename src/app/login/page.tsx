'use client'

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Styles from "./login.module.css";
import Input from "../Componentes/input";
import Usuario from '../Interfaces/usuario';
import NavBar from '../Componentes/navbar';
import { setCookie } from 'nookies';
import { ApiURL } from '../utils/config';


interface ResponseSignin {
    erro: boolean,
    mensagem: string,
    token?: string
  }

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errologin, setError] = useState('');

    

    const  handleSubmit = async (e : FormEvent) => {
        e.preventDefault();
        try {
         const response = await fetch(`${ApiURL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({email, password})
         })
         
          if (response){
            const data : ResponseSignin = await response.json()
            const {erro, mensagem, token = ''} = data;
            console.log(data)
            if (erro){
              setError(mensagem)
            } else {
              // npm i nookies setCookie
              setCookie(undefined, 'restaurant-token', token, {
                maxAge: 60*60*1 // 1 hora
              } )
              router.push('/')
            }
          } else {
  
          }
      } 
       catch (error) {
      console.error('Erro na requisicao', error)
        }
    }

    return (
        <div>
            <NavBar/>
        <div className={Styles.centro}>
            <center>
                <p className={Styles.p}>Página de Login!</p>
                <br />
                <form onSubmit={handleSubmit}>
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <br />
                    <button type="submit" className={Styles.botao}>Login</button>
                    {errologin && <p className={Styles.erro}> {errologin}</p>}
                </form>
            </center>
        </div>
        </div>
    );
}
