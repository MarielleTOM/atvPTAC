"use client";

import { useEffect, useState, FormEvent } from "react";
import NavBar from "../Componentes/navbar";
import styles from "./reserva.module.css";
import Menu from "../Componentes/menu";
import {getUser} from "../utils/serverActions";

export default function Reservas() {
  const [user,setUser] = useState<any>(null);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const usuario = await getUser();
      if (!usuario) {
        window.location.href = "/"; // Redireciona se não estiver logado
      } else {
        setUser(usuario);
      }
      setLoading(false)
    }

    fetchData();
  },[]);

  if (loading) {
    return <p className={styles.loading}>Carregando...</p>;
  }

  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
        <Menu user={user} />
        <div className="w-full p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Você está na página de Reservas</h2>
          <p className="text-gray-600">Aqui você pode gerenciar suas reservas e encontrar informações úteis.</p>
        </div>
      </div>
    </div>
  );
}