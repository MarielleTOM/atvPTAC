import Styles from "./navbar.module.css";
import Link from "next/link";

export default function navBar() {
    return (
        <header>
            <nav className={Styles.cabecalho}>
                <div>
                    <Link href={"/"}>
                        <h1>Marielly's restaurant</h1>
                    </Link>
                </div>
            </nav>
        </header>
    )
}