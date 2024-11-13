'use client'
import Image from "next/image";
import Link from "next/link";
import Styles from './home.module.css'
import NavBar from "./Componentes/navbar"

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className={Styles.conteiner}>
        <center>
          <br />
          <button className={Styles.botao}>
            <Link href={"/login/"}>
              <p>Ir para LOGIN!</p>
            </Link>
          </button>
          <br />
          <br />
          <button className={Styles.botao}>
            <Link href={"/cadastro/"}>
              <p>Ir para CADASTRO</p>
            </Link>
          </button>
        </center>
      </div>
    </div>
  );
}
