import Image from "next/image";
import Link from "next/link";
import Styles from './home.module.css'

export default function Home() {
  return (
    <div className={Styles.centro}>
      <center>
        <p className={Styles.p}>Página Home!</p>
        <br/>
        <button className={Styles.botao}>
          <Link href={"/login/"}>
            <p>Ir para LOGIN!</p>
          </Link>
        </button>
      </center>
    </div>
  );
}
