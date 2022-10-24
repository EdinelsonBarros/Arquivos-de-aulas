import Layout from '../components/Layout'

export default function Jsx() {
  const titulo = <h1>JSX é um Conceito central</h1>

  function subtitulo() {
    return <h2>{"muito legal".toUpperCase()}</h2>
  }
    return (
      <Layout titulo="Exemplo de CSS modularizado">
        {titulo}
        {subtitulo()}
      </Layout>
    )
}