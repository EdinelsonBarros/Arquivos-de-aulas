import Styles from '../styles/layout.module.css'
import Link from 'next/link'

export default function layout(props) {
    return (
    <div className={Styles.layout}>
        <div className={Styles.cabecalho}>
            <h1>{props.titulo ?? 'Mais um exemplo'}</h1>
            <Link href="/">
                Voltar
            </Link>
        </div>
        <div className={Styles.conteudo}>
            {props.children}
        </div>
    </div>

    )
}