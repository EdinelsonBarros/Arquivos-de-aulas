import Cliente from "../core/Cliente"
import {useEffect, useState} from "react"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const { tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
        })
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }
    
    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }
    
    function selecionarClientes(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }
        
     return {
        cliente,
        clientes,
        novoCliente,
        excluirCliente,
        selecionarClientes,
        salvarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }

}