'use client'
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Styles from "./cadastro.module.css";
import Input from "../Componentes/input";
import Usuario from '../Interfaces/usuario';
import NavBar from "../Componentes/navbar"
import { ApiURL } from '../config';

export default function reserva() {
    return(
        <div>
            <p>Pagina de reserva</p>
        </div>
    );
}
