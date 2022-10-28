import Tabela from "../components/Tabela"
import Layout from "../components/Layout"
import Cliente from "../core/Cliente"

export default function Home() {

    const clientes = [
      new Cliente('Edinelson', 26, '1'),
      new Cliente('Lidia', 27, '2'),
      new Cliente('Lucia', 51, '3'),
      new Cliente('Carlos', 60, '4'),
      new Cliente('Valdecy', 52, '5')
    ]  

  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
     <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
     </Layout>
    </div>
  )
}
