'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(true);
 if(user){
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Cliente</h1>
      <button onClick={() => setUser(false)}>Oi</button>
    </div>
  );
 }else{
  return(
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <h1>Administrador</h1>
    <button onClick={() => setUser(true)}>Hi</button>
  </div>
  );
 }
}
