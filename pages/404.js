import Link from "next/link"

import styles from '../styles/NotFound.module.css'

import Layout from "../components/Layout"

const NoEncontrado = () => {
    return (
        <Layout
            title={'Pagina no encontrada'}
        >
            <div className={styles.notfound}>
                <h1>PAGINA NO ENCONTRADA</h1>
                <Link href={'/'}>
                    <a>
                        Volver al Inicio
                    </a>
                </Link>
            </div>
        </Layout>

    )
}

export default NoEncontrado