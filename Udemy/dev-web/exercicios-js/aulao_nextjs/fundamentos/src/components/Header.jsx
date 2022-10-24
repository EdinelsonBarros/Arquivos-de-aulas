export default function Cabecalho(props) {
    console.log(props)
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}