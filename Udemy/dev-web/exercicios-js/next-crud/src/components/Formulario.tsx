import Entrada from './Entrada'
import { useState } from "react"
import Cliente from '../core/Cliente'
import Botao from './Botao'

interface formularioProps {
    cliente: Cliente
}

export default function Formulario(props: formularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [Idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return(
        <div className='bg-gray-200 p-5 '>
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
                    valor={Idade}
                    valorMudou={setIdade}
                />
                <div className='mt-7 flex justify-end'>
                    <Botao cor="blue" className="mr-2">
                        {id ? 'Alterar' : 'Salvar'}
                    </Botao>
                    <Botao>
                        Cancelar
                    </Botao>
                </div>
        </div>
    )
}