import Layout from "../../../../components/Layout";
import { useRouter } from 'next/router'


export default function ClientesPorCódigo() {
    const router = useRouter()

    return (
        <Layout titulo="Navegação Dinâmica">

            <div>Estado = {router.query.estado} </div>
            <div>Cidade = {router.query.cidade} </div>
            <div>Nome = {router.query.nome} </div>
        </Layout>
    )
}