import Link from "next/link"
import Styles from '../styles/navegador.module.css'


export default function navegador(props) {
    return (
        <Link href={props.destino}>
            <div className={Styles.navegador} style={{
                backgroundColor: props.cor ?? 'dodgerblue'
            }}>
            {   props.texto}
            </div>
        </Link>          
    )
}