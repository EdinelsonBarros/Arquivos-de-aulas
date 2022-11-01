import Entrada from './Entrada'
import { useState } from "react"
import Cliente from '../core/Cliente'
import Botao from './Botao'

interface formularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void 
}

export default function Formulario(props: formularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return(
        <div className='bg-gray-200 p-5'>
            {id ? (
                <Entrada 
                somenteLeitura
                texto='Código' 
                valor={id}
                className="mb-5"
                />
            ) : false}
                <Entrada 
                    texto='Nome' 
                    valor={nome}
                    valorMudou={setNome}
                    className="mb-5"
                />
                <Entrada 
                    texto="Idade" 
                    tipo="number" 
                    valor={idade}
                    valorMudou={setIdade}
                />
                <div className='mt-7 flex justify-end'>
                    <Botao cor="blue" className="mr-2"
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                        {id ? 'Alterar' : 'Salvar'}
                    </Botao>
                    <Botao onClick={props.cancelado}>
                        Cancelar
                    </Botao>
                </div>
        </div>
    )
}