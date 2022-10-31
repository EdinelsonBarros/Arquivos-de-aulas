import Tabela from "../components/Tabela"
import Layout from "../components/Layout"
import Cliente from "../core/Cliente"
import Botao from "../components/Botao"

export default function Home() {

    const clientes = [
      new Cliente('Edinelson', 26, '1'),
      new Cliente('Lidia', 27, '2'),
      new Cliente('Lucia', 51, '3'),
      new Cliente('Carlos', 60, '4'),
      new Cliente('Valdecy', 52, '5')
    ]  

    function clienteSlecionado(cliente: Cliente) {
      console.log(cliente.nome)
    }
    function clienteSelecionado(cliente: Cliente) {
      console.log(cliente.nome)
    }
    function clienteExcluido(cliente: Cliente) {
      console.log(cliente.nome)
    }

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
     <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
        <Botao cor="gray" className="mb-4">Novo Cliente</Botao>

        </div>
        <Tabela clientes={clientes} 
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}
        />  
     </Layout>
    </div>
  )
}
