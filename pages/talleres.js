import styles from '../styles/Talleres.module.css'

import Layout from "../components/Layout"
import ProximosTalleres from "../components/index/ProximosTalleres"

const talleres = ({talleres}) => {
    return (
        <Layout
            title={'Talleres'}
        >
            <div className={styles.talleres}>
                <h1>Todos Nuestros talleres</h1>
                <ProximosTalleres 
                    all={'yes'}
                    talleres={talleres}
                />
            </div>
        </Layout>
    )
}

export default talleres

export async function getStaticProps() {
    const url = `${process.env.API_URL}/api/tallers?fields=*&populate=cartel`
    const respuesta = await fetch(url)
    const talleres = await respuesta.json()

    return {
        props: {
            talleres
        }
    }
}