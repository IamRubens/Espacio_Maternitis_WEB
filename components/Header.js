import { useState } from "react" 
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"

import styles from "../styles/Header.module.css"
import Hamburguer from "./Hamburguer"

const Header = () => {

    const { asPath } = useRouter()

    const [ navOpen, setNavOpen] = useState(false)

    return (

        <header className={`${styles.header} `}>
            <div className={`${styles.bar} container`}>
                {asPath !== '/' ?
                    <div className={styles.logo}>
                        <Link href='/'>
                            <Image layout='responsive' width={400} height={100} src='/img/logo_header.svg' alt='Logo Espacio Maternitis' />
                        </Link>
                    </div>
                : ''}
                    

                <div>
                    <Hamburguer 
                        navOpen={navOpen}
                        setNavOpen={setNavOpen}
                    />
                    <div className={`${styles.nav} ${navOpen ? styles.open : ''} ${asPath === '/' ? styles.index : ''}`}>
                        <Link href='/que_es'>
                            <a onClick={() => setNavOpen(!navOpen)}>Que es</a>
                        </Link>
                        <Link href='/que_hacemos'>
                            <a onClick={() => setNavOpen(!navOpen)}>Talleres</a>
                        </Link>
                        <Link href='/te_cuento'>
                            <a onClick={() => setNavOpen(!navOpen)}>Grupo de juego</a>
                        </Link>
                        <Link href='/quien_soy'>
                            <a onClick={() => setNavOpen(!navOpen)}>Circulo de Crianza</a>
                        </Link>
                        <Link href='/blog'>
                            <a onClick={() => setNavOpen(!navOpen)}>Blog</a>
                        </Link>
                        <Link href='/hablamos'>
                            <a onClick={() => setNavOpen(!navOpen)}>Hablamos</a>
                        </Link>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header